import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-success" href="#">
					<img src="https://www.frikibunker.es/productos/imagenes/img_2268_e13b929bd6d29fce1e2db87430edb5c8_1.png" alt="Logo" width="40" height="40" className="d-inline-block align-text-top" />
					CULTURE CODE ACADEMY
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<li className="nav-item dropdown">
							<a className="nav-link text-success dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Cursos <i class="fa-solid fa-school"></i>
							</a>
							<ul className="dropdown-menu">
								<li><a className="dropdown-item text-success" href="#">HTML5   <i class="fa-brands fa-html5 fa-beat"></i></a></li>
								<li><a className="dropdown-item text-success" href="#">CSS3   <i class="fa-brands fa-css3-alt fa-beat"></i></a></li>
								<li><a className="dropdown-item text-success" href="#">JAVASCRIPT   <i class="fa-brands fa-square-js fa-beat"></i></a></li>
								<li><a className="dropdown-item text-success" href="#">SQL   <i class="fa-solid fa-database fa-beat"></i></a></li>
								<li><a className="dropdown-item text-success" href="#">PYTHON   <i class="fa-brands fa-python fa-beat"></i></a></li>
								<li><a className="dropdown-item text-success" href="#">REACT   <i class="fa-brands fa-react fa-beat"></i></a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link text-success" href="#">Blog <i class="fa-solid fa-blog"></i></a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link text-success dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Login <i class="fa-solid fa-right-to-bracket"></i>
							</a>
							<ul className="dropdown-menu">
								<input className="form-control me-2" type="Login" placeholder="Login" /> <i class="fa-solid fa-circle-user" />
								<li><a className="dropdown-item" href="#">Password  <i class="fa-solid fa-lock"></i></a></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdown-item" href="#">Log Out <i class="fa-solid fa-share-from-square"></i></a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link text-success disabled" aria-disabled="true">Carrito<i class="fa-solid fa-cart-shopping"></i></a>
						</li>
					</ul>
					<form className="d-flex ms-3" role="search">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};