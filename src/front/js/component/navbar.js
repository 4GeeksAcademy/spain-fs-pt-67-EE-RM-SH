import React from "react";
import { Link } from "react-router-dom"

export const Navbar = () => {
	return (

		<nav className="navbar navbar-expand-lg p-0">
			<div className="container-fluid">
				<Link to="/" className="navbar-brand text-success custom-brand">
					<img src="https://www.frikibunker.es/productos/imagenes/img_2268_e13b929bd6d29fce1e2db87430edb5c8_1.png" alt="Logo" width="60" height="" className="d-inline-block align-text-center" />
					CULTURE CODE ACADEMY
				</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<Link to="/courses" className="nav-link text-success" href="#" role="button" aria-expanded="false">
								Cursos <i className="fa-solid fa-school"></i>
							</Link>

						</li>
						<li className="nav-item">
							<button
								className="nav-link btn btn-link"
								onClick={() => handleLanguageChange("es")} // Agrega una función para cambiar el idioma
							>
								ES
							</button>
						</li>
						<li className="nav-item">
							<button
								className="nav-link btn btn-link"
								onClick={() => handleLanguageChange("en")} // Agrega una función para cambiar el idioma
							>
								EN
							</button>
						</li>

						<li className="nav-item">
							<Link to="/blog" className="nav-link text-success" href="#">Blog <i className="fa-solid fa-blog"></i></Link>
						</li>
						<li className="nav-item dropdown">
							<Link to="/login" className="nav-link text-success" href="#" role="button" aria-expanded="false">
								Iniciar sesion <i className="fa-solid fa-right-to-bracket"></i>
							</Link>

						</li>
						<li className="nav-item">
							<Link to="/payment" className="nav-link text-success" href="#" role="button" aria-expanded="false">
								Carrito <i className="fa-solid fa-cart-shopping"></i>
							</Link>
						</li>
					</ul>

				</div>
			</div>
		</nav>
	);
};