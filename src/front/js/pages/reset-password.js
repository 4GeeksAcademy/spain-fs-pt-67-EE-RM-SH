import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const ResetPassword = () => {
    const { store, actions } = useContext(Context);
    const [newPassword, setNewPassword] = useState('');
    const navigate = useNavigate();  // Asegúrate de usar useNavigate para la redirección

    const handleResetPassword = async (e) => {
        e.preventDefault();
        const userId = store.users;  // Suponiendo que el ID del usuario está en el contexto

        try {
            // Ejecuta la acción putUser y espera su respuesta
            const response = await actions.putUser(userId, newPassword);

            if (response) {
                navigate("/login"); // Redirige a la página de inicio de sesión si la actualización es exitosa
            } else {
                alert("No se pudo restablecer la contraseña. Inténtalo de nuevo.");
            }
        } catch (error) {
            console.error("Error en la actualización de la contraseña:", error);
            alert("Hubo un error en el proceso de restablecimiento de contraseña.");
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleResetPassword}>
                <div>
                    <label htmlFor="newpassword">Nueva Contraseña:</label>
                    <input
                        type="password"
                        id="newpassword"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required  // Asegúrate de que el campo sea obligatorio
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
