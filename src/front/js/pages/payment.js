import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const Payment = props => {
	const { store, actions } = useContext(Context);
	const [formData, setFormData] = useState({
		cardName: '',
		cardNumber: '',
		expiryDate: '',
		cvv: '',
		billingAddress: '',
		city: '',
		state: '',
		zip: '',
		country: '',
	});

	const product = {
		name: 'Producto Ejemplo',
		price: 99.99,
		quantity: 1,
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Aquí puedes manejar el envío del formulario, como enviar los datos a tu servidor o pasarela de pago.
		console.log('Datos del formulario:', formData);
	};

	return (
		<div className="form-payment">
			<form className="form-background" onSubmit={handleSubmit}>
				<h3 className="h3-payment">Detalles del Producto</h3>
				<div className="product-summary">
					<span className="product-name">{product.name}</span>
					<span className="product-quantity">Cantidad: {product.quantity}</span>
					<span className="product-price">Precio: ${product.price.toFixed(2)}</span>
				</div>

				<div className="total">
					<span>Total a pagar:</span>
					<span className="total-price">${(product.price * product.quantity).toFixed(2)}</span>
				</div>

				<h3 className="h3-payment">Detalles de Pago</h3>
				<div>
					<label className="label-payment">Nombre en la tarjeta</label>
					<input className="input-payment"
						type="text"
						name="cardName"
						value={formData.cardName}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="label-payment">Número de tarjeta</label>
					<input className="input-payment"
						type="text"
						name="cardNumber"
						value={formData.cardNumber}
						onChange={handleChange}
						required
						pattern="\d{16}" // Acepta solo 16 dígitos
					/>
				</div>

				<div>
					<label className="label-payment">Fecha de expiración (MM/AA)</label>
					<input className="input-payment"
						type="text"
						name="expiryDate"
						value={formData.expiryDate}
						onChange={handleChange}
						required
						pattern="\d{2}/\d{2}" // Acepta solo el formato MM/AA
					/>
				</div>

				<div>
					<label className="label-payment">CVV</label>
					<input className="input-payment"
						type="text"
						name="cvv"
						value={formData.cvv}
						onChange={handleChange}
						required
						pattern="\d{3,4}" // Acepta solo 3 o 4 dígitos
					/>
				</div>

				<h3>Dirección de Facturación</h3>
				<div>
					<label className="label-payment">Dirección</label>
					<input className="input-payment"
						type="text"
						name="billingAddress"
						value={formData.billingAddress}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="label-payment">Ciudad</label>
					<input className="input-payment"
						type="text"
						name="city"
						value={formData.city}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="label-payment">Estado/Provincia</label>
					<input className="input-payment"
						type="text"
						name="state"
						value={formData.state}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="label-payment">Código postal</label>
					<input className="input-payment"
						type="text"
						name="zip"
						value={formData.zip}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label className="label-payment">País</label>
					<input className="input-payment"
						type="text"
						name="country"
						value={formData.country}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="div-pagar">
					<a href="#" className="btn1 m-3">Pagar</a>
				</div>
			</form>
		</div>

	);
};





