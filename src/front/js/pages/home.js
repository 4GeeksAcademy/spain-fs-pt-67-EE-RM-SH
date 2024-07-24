import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import logo from '../../img/Untitled_design-removebg-preview.png';
import bgVideo from '../../videos/133C.gif';
import { SecondsCounter } from "../component/contador-ofertas.jsx";



export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" text-center mt-5">

      {/* <video className="background-video" autoPlay loop muted>
        <source src="https://www.youtube.com/watch?v=KCVN-SuBBWM" />
        Tu navegador no soporta el elemento de video.
      </video> */}

      <img src={bgVideo} className="background-home d-flex justify-content-center" />



        <SecondsCounter className="mb-5" />



      <div className="row">


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">JavaScript Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Python Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Angular Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>

      </div>





      <div className="row">

        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Astro Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Html Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Css Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Sql Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>

      </div>





      <div className="row">



        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">TypeScript Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Php Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Bootstrap Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>
          </div>
        </div>


        <div className="card mx-5 col-3">
          <img src={logo} className="card-img-top img-fluid d-flex justify-content-center" alt="..." />
          <div className="card-body">
            <h5 className="card-title">React Native Revolution</h5>
            <p className="card-text">14 clases.</p>
            <p className="card-cost1">$25.99</p>
            <p className="card-cost2">$19.99</p>
            <a href="#" className="btn btn-success">Comprar</a>

          </div>
        </div>

      </div>

    </div>
  );
};
