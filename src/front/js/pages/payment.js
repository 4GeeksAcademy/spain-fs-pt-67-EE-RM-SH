import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Payment = props => {
	const { store, actions } = useContext(Context);

	return (
		<h1>Esto es la página del carrito</h1>
	);
};