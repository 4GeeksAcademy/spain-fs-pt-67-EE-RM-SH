import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import bgVideo from '../../videos/133C.gif';
import { Link } from "react-router-dom";

export const Courses = () => {
	const { store, actions } = useContext(Context);

	// Fecha y hora objetivo (3 días, 22 horas, 30 minutos y 24 segundos desde ahora)
	const targetDate = new Date();
	targetDate.setDate(targetDate.getDate() + 2);
	targetDate.setHours(targetDate.getHours() + 10);
	targetDate.setMinutes(targetDate.getMinutes() + 30);
	targetDate.setSeconds(targetDate.getSeconds() + 24);

	const calculateTimeLeft = () => {
		const difference = +targetDate - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
				horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutos: Math.floor((difference / 1000 / 60) % 60),
				segundos: Math.floor((difference / 1000) % 60)
			};
		} else {
			timeLeft = {
				dias: 0,
				horas: 0,
				minutos: 0,
				segundos: 0
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const timerComponents = Object.keys(timeLeft).map(interval => (
		<span key={interval}>
			{timeLeft[interval]} {interval}{" "}
		</span>
	));

	useEffect(() => {
		actions.getCourses();
		actions.getCourse();
	}, [actions]);

	return (
		<div className="text-center mt-5">
			<h1 className="counter">Ofertas en nuestros cursos hasta:</h1>
			<div className="time">
				{timerComponents.length ? timerComponents : <span>¡Tiempo completado!</span>}
			</div>

			<img src={bgVideo} className="background-home d-flex justify-content-center" alt="background" />

			<div className="row">
				{store.courses.map((item, index) => (
					<div className="col-2 mx-5" key={index}>
						<div className="card">
							<img
								src={item.logo || 'default-logo.png'}
								className="card-img-top img-fluid d-flex justify-content-center"
								alt={item.name || 'Curso'}
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.description}</p>
								<p className="card-text">{item.clases}</p>
								<p className="card-cost1">${item.price_original}</p>
								<p className="card-cost2">${item.price}</p>
								<div>
									<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
								</div>
								<div>
									<button
										onClick={() => actions.addCourses({
											id: item.id,
											name: item.name,
											description: item.description,
											price: item.price
										})}
										className="btn1 m-3"
									>
										Añadir al <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i>
									</button>
								</div>
								<div>
									<button
										onClick={() => actions.removeCourse(item.id)}
										className="btn3 m-3"
									>
										Eliminar del <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i>
									</button>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
