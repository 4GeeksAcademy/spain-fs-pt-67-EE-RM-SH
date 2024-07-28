import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Registration = () => {
    const { store, actions } = useContext(Context);

    // const {actions} = useContext(Context)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState('');
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
                <div>
                    <label htmlFor="email">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Phone Number:</label>
                    <input
                        type="number"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Adress:</label>
                    <input
                        type="text"
                        id="adress"
                        value={adress}
                        onChange={(e) => setAdress(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>

        </div>
    );
};


