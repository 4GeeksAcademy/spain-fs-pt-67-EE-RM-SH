import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
	const { store, actions } = useContext(Context);
	const navigate=useNavigate()

	// const {actions} = useContext(Context)
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	// const navigate = useNavigate();
	console.log("email", email)
	console.log("password", password)

	const handleLogin = async (e) => {
		console.log("email", email)
		console.log("password", password)
	    e.preventDefault()
		actions.login(email, password)
		navigate("/")
	}

	return (
		<div className="login-container">
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						type="text"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
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


