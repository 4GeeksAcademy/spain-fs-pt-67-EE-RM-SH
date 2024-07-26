import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Blog = () => {
    const { store, actions } = useContext(Context);

    return (
        <h1>Esto es el blog</h1>
    );
};
