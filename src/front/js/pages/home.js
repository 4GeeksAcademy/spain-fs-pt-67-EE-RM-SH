import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from '../../img/Untitled_design-removebg-preview.png';
import bgVideo from '../../videos/133C.gif';



export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container-fluid text-center mt-5 d-flex justify-content-center">

      {/* <video className="background-video" autoPlay loop muted>
        <source src={bgVideo} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video> */}
<img src={bgVideo} className="background-home" />

      <div className="card mx-5">

        <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
        <div className="card-body">
          <h5 className="card-title">JavaScript Revolution</h5>
          <p className="card-text">14 clases.</p>
          <p className="card-cost1">$25.99</p>
          <p className="card-cost2">$19.99</p>
          <a href="#" className="btn btn-success">Comprar</a>
        </div>
      </div>

      <div className="card mx-5">
        <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Python Revolution</h5>
          <p className="card-text">14 clases.</p>
          <p className="card-cost1">$25.99</p>
          <p className="card-cost2">$19.99</p>
          <a href="#" className="btn btn-success">Comprar</a>

        </div>
      </div>

      <div className="card mx-5">
        <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
        <div className="card-body">
          <h5 className="card-title">React Revolution</h5>
          <p className="card-text">14 clases.</p>
          <p className="card-cost1">$25.99</p>
          <p className="card-cost2">$19.99</p>
          <a href="#" className="btn btn-success">Comprar</a>

        </div>
      </div>



    </div>
  );
};
