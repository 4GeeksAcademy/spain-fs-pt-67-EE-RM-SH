import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
 <div>
        <h1>Está es la página principal</h1>
        <Link to="/student">

<button><h3>student</h3></button>
        </Link>
        </div>
    );
};
