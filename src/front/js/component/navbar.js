
import { Link, useNavigate } from "react-router-dom"
import bgVideo from '../../videos/133C.gif';
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);



	const navigate = useNavigate();

	const handleLogout = () => {
		actions.logout(); // Función que elimina el token y actualiza el estado
		navigate("/login"); // Redirige al usuario a la página de inicio
	};



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
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-4">
						<li className="nav-item dropdown px-2">
							<Link to="/courses" className="nav-link text-success" href="#" role="button" aria-expanded="false">
								Cursos <i className="fa-solid fa-school"></i>
							</Link>

						</li>

						<li className="nav-item px-2">
							<Link to="/blog" className="nav-link text-success" href="#">Blog <i className="fa-solid fa-blog"></i></Link>
						</li>

					  {store.token ? ( // Condición para mostrar el botón de cerrar sesión
                            <li className="nav-item dropdown d-flex px-2">
                                <button onClick={handleLogout} className="logout nav-link" role="button" aria-expanded="false">
                                    Cerrar sesión
                                </button>
                            </li>
                        ) : ( // Condición para mostrar el botón de iniciar sesión
                            <li className="nav-item dropdown d-flex px-2">
                                <Link to="/login" className="login nav-link" href="#" role="button" aria-expanded="false">
                                    Iniciar sesión <i className="fa-solid fa-right-to-bracket"></i>
                                </Link>
                            </li>
                        )}

						<div className="dropdown px-2">
							<Link to="/payment"> <button className="carrito" role="button">
								<span className="num-carrito position-absolute top-0 start-100 translate-middle badge rounded-pill">
									{store.addCourses.length}
								</span>

								<i className="fa-solid fa-cart-shopping fa-lg"></i>
							</button>
							</Link>

						</div>


					</ul>

				</div>
			</div>
		</nav>
	);
};