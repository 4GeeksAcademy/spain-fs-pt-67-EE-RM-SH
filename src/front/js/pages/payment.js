import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Payment = () => {
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

	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	// Aquí puedes manejar el envío del formulario, como enviar los datos a tu servidor o pasarela de pago.
	// 	console.log('Datos del formulario:', formData);
	// 	// Ejemplo: actions.submitPayment(formData); // Asegúrate de definir esta acción
	// };

	// useEffect(() => {

	// 	actions.getOrders();
	// }, [actions]);


	return (
		<div className="form-payment">
			<form className="form-background" >
				<div className="product-summary">
					<h3 className="h3-payment">Detalles del Producto</h3>
					<div>
						{store.orders.map((item, index) => (
							<div className="col-2 mx-5" key={index}>
								<div className="card">
									{/* Si necesitas una imagen, descomenta y ajusta la línea de abajo */}
									{/* <img
									src={item.logo || 'default-logo.png'}
									className="card-img-top img-fluid d-flex justify-content-center"
									alt={item.name || 'Curso'}
								/> */}
									<div className="card-body">
										<h5 className="card-title">{item.methods_payment}</h5>
										<p className="card-text">{item.payment_date}</p>
										<p className="card-text">{item.total}</p>
										<p className="card-cost1">${item.status}</p>
									</div>
								</div>
							</div>
						))}
					</div>
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
					<button type="submit" className="btn1 m-3">Pagar</button>
				</div>
			</form>
		</div>
	);
};
