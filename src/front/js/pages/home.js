import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


import { Context } from "../store/appContext";




export const Home = () => {
    const { store, actions } = useContext(Context);

    const navigate = useNavigate();

    const TypingEffect = ({ text, speed = 120 }) => {
        const [displayedText, setDisplayedText] = useState('');

        useEffect(() => {
            let index = 0;
            const timer = setInterval(() => {
                setDisplayedText(prev => prev + text[index]);
                index += 1;
                if (index >= text.length) {
                    clearInterval(timer);
                }
            }, speed);

            return () => clearInterval(timer);
        }, [text, speed]);

        return (
            <div>
                {displayedText}
            </div>
        );
    };

    return (
        <div>

            <div className="typingEffect">
                <header className="header">
                    <div className="header-container">
                        <h1> <TypingEffect text="Bienvenido a Culture Code Academy </>" speed={115} /></h1>
                    </div>
                </header>

            </div>


            <div className="welcome-page">


                <section className="about-section">
                    <div className="about-container">
                        <h2 className="section-title">¿A Qué Nos Dedicamos?</h2>
                        <p className="section-text">
                            En Culture Code Academy, nos especializamos en ofrecer formación integral en los lenguajes de programación más demandados del mercado. Nuestros cursos están diseñados para equiparte con las habilidades necesarias para sobresalir en el mundo tecnológico.
                        </p>

                        <h2 className="section-title">¿Quiénes Somos?</h2>
                        <p className="section-text">
                            Somos un equipo de expertos en tecnología con años de experiencia en la enseñanza y desarrollo de software. Nuestra misión es brindarte educación de calidad que te prepare para enfrentar los desafíos del mundo real.
                        </p>

                        <h2 className="section-title">¿Qué Hacemos en Nuestra Plataforma?</h2>
                        <p className="section-text">
                            Ofrecemos una plataforma interactiva donde puedes acceder a cursos, talleres y recursos educativos sobre programación. Nuestra plataforma está diseñada para proporcionarte una experiencia de aprendizaje envolvente y efectiva.
                        </p>

                        <h2 className="section-title">Nuestra Experiencia</h2>
                        <p className="section-text">
                            Contamos con más de 10 años de experiencia en la industria tecnológica y educativa. Nuestra trayectoria nos ha permitido perfeccionar nuestros métodos de enseñanza y adaptarnos a las necesidades de nuestros estudiantes.
                        </p>

                        <h2 className="section-title">¿Por Qué Estudiar Con Nosotros?</h2>
                        <p className="section-text">
                            Estudiar con nosotros te garantiza acceso a contenido actualizado, instrucciones de expertos y una comunidad de aprendizaje activa. Nuestros cursos están diseñados para ofrecerte el conocimiento práctico y teórico que necesitas para triunfar.
                        </p>

                        <h2 className="section-title">Estadísticas de la Escuela</h2>
                        <p className="section-text">
                            <strong>Alumnos Aprobados:</strong> Más de 5,000<br />
                            <strong>Alumnos Actuales:</strong> Más de 20,000
                        </p>
                    </div>
                </section>
            </div>




            <Link to="/student">

                <button><h3>student</h3></button>
            </Link>
        </div>
    );
};
