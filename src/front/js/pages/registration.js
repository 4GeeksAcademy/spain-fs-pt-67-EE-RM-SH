import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from '@cloudinary/react';
import { fill } from "@cloudinary/url-gen/actions/resize";


import { Context } from "../store/appContext";

export const Registration = () => {
    const { store, actions } = useContext(Context);

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'dz9b1qh4i'
        }
    });
    // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage1 = cld.image('6196dYkcnWL._AC_UY1000__blq861');


    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage1.resize(fill().width(250).height(250));




    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [role, setRole] = useState('');
    // const [profile, setProfile] = useState('');
    const navigate = useNavigate();

    const handleRegistrer = async (e) => {
        e.preventDefault()
        const createUser = await actions.createUser(email, password, name, lastname, role)
        if (createUser) {
            navigate("/"); // Redirige a la pagina student si el inicio de sesión es exitoso
        } else {
            alert("Login failed. Please check your credentials.");

        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleRegistrer}>

                <div>
                    <label htmlFor="profileImage">Foto de perfil:</label>
                    <AdvancedImage cldImg={myImage1} />
                </div>



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
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastname">Lastname:</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>
                <button type="submit">Registrarse</button>
            </form>

        </div>
    );
};

