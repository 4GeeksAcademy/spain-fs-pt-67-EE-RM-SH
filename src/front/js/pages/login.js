import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);

	// const {actions} = useContext(Context)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault()
		const logged = await actions.login(email, password)

		if (logged) {
			navigate("/home");
		}
	}

	return (
		<div className="login-container">
			<form onSubmit={handleLogin}>
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
				<button type="submit">Login</button>
			</form>
			<Link className="registro" to="/registration">
				<button><h3>Registrarse</h3></button>
			</Link>
		</div>
	);
};


