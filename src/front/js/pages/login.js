import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Login = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleLogin = async () => {
		const logged = await actions.login(email, password);

		if (logged) {
			navigate("/"); // Redirige al home si el inicio de sesión es exitoso
		} else {
			// Aquí podrías manejar errores, por ejemplo, mostrando un mensaje al usuario
			alert("Login failed. Please check your credentials.");
		}
	};

	return (
		<div className="login-container">
			<div>
				<div>
					<label htmlFor="email">Email:</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<Link className="registro" to="/registration">
					<button>Registering</button>
				</Link>
				<button onClick={handleLogin}><h3>Login</h3></button>
			</div>
		</div>
	);
};
