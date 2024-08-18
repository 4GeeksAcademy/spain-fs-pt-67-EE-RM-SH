import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ResetPassword = () => {
    const { store, actions } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = async (e) => {
        e.preventDefault()
        const resetPassword = await actions.putUser(id, password)
        if (resetPassword) {
            navigate("/login"); // Redirige a la pagina student si el inicio de sesión es exitoso
        } else {
            alert("Login failed. Please check your credentials.");
        }

    };

    return (
        <div className="login-container">
            <form onSubmit={handleResetPassword} >
                <div>
                    <label htmlFor="newpassword">Nueva Contraseña:</label>
                    <input
                        type="password"
                        id="newpassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Restablecer contraseña</button>
            </form>
            <Link className="back-login" to="/login">
                <button>Volver atrás</button>
            </Link>


        </div>
    );

};
