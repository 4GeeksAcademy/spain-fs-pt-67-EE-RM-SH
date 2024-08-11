import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from '../../img/Untitled_design-removebg-preview.png';
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

	const timerComponents = [];

	Object.keys(timeLeft).forEach(interval => {
		timerComponents.push(
			<span key={interval}>
				{timeLeft[interval]} {interval}{" "}
			</span>
		);
	});



	return (
		<div className=" text-center mt-5">


			<h1 className="counter" >Ofertas en nuestros cursos hasta :</h1>
			<div className="time">
				{timerComponents.length ? timerComponents : <span>¡Tiempo completado!</span>}
			</div>


			<img src={bgVideo} className="background-home d-flex justify-content-center" />

			<div className="row">


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">JavaScript Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}

						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Python Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>

				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">React Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Angular Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>

			</div>





			<div className="row">

				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Astro Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Html Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Css Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Sql Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a onClick={() => actions.addFavoritsCharacters(item.uid, item.name)} href="#" className="btn1 m-3">Añadir al carrito <i className="fa-solid fa-cart-shopping fa-lg" style={{ color: "white" }}></i></a>
						</div>
					</div>
				</div>

			</div>





			<div className="row">



				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">TypeScript Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a href="#" className="btn1 m-3">Añadir al carrito</a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Php Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a href="#" className="btn1 m-3">Añadir al carrito</a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">Bootstrap Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a href="#" className="btn1 m-3">Añadir al carrito</a>
						</div>
					</div>
				</div>


				<div className="card mx-5 col-3">
					<img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
					<div className="card-body">
						<h5 className="card-title">React Native Revolution</h5>
						<p className="card-text">14 clases.</p>
						<p className="card-cost1">$25.99</p>
						<p className="card-cost2">$19.99</p>
						{/* <a href="#" className="btn btn-success">Comprar</a> */}
						<div>
							<Link to="/payment"><button className="btn2 m-3">Comprar</button></Link>
						</div>

						<div>
							<a href="#" className="btn1 m-3">Añadir al carrito</a>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};
