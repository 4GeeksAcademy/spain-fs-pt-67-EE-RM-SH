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
                <h1> <TypingEffect  text="Bienvenido a Culture Code Academy </>" speed={115} /></h1>
            </div>



            <Link to="/student">

                <button><h3>student</h3></button>
            </Link>
        </div>
    );
};
