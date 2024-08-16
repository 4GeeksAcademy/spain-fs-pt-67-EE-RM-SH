import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../img/Untitled_design-removebg-preview.png';


import { Context } from "../store/appContext";

export const Student = () => {
    const { store, actions } = useContext(Context);


    useEffect(() => {
        actions.getLessons(); // Llama a la acción para obtener lecciones
    }, [actions]);

    console.log(store.lessons)
    return (


        <div className="text-center">
            <h1>Esta es la página de estudiantes</h1>

            <div className="accordion" id="accordionExample">
                {store.lessons.map((lesson, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button
                                className={`accordion-button ${index === 0 ? '' : 'collapsed'}`}
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapse${index}`}
                                aria-expanded={index === 0}
                                aria-controls={`collapse${index}`}
                            >
                                <img width="100" src={logo} alt="Logo" />
                                {lesson.title}
                            </button>
                        </h2>
                        <div
                            id={`collapse${index}`}
                            className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <div className="row">
                                    <iframe
                                        className="col-12 p-3"
                                        width="560"
                                        height="315"
                                        src={lesson.url_video}
                                        title={lesson.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p><strong>Categoria:</strong> {lesson.category}</p>
                                <p><strong>Descripción:</strong> {lesson.description}</p>
                                <p><strong>Autor:</strong> {lesson.author}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
    