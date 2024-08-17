import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Blog = () => {
    const { store, actions } = useContext(Context);

    return (
        <div class="container mt-5">
            <header class="mb-4 text-center">
                <h1>Blog de Tecnología</h1>
                <p>Explora los últimos artículos y recursos sobre desarrollo de software, programación y más.</p>
            </header>

            <div class="row">
                <main class="col-md-8">
                    <div class="mb-4">
                        <article class="mb-4">
                            <img src="path-to-your-image/state-of-js.jpg" alt="Estado de JavaScript" class="img-fluid mb-3" />
                            <h2>El estado de JavaScript en 2023</h2>
                            <p>La encuesta anual de State of JS 2023 ha revelado nuevas tendencias y tecnologías emergentes. Descubre qué tecnologías y frameworks están ganando popularidad y cómo puedes aprovechar estas tendencias en tus proyectos.</p>
                            <a href="/post/1" class="btn btn-primary">Leer más</a>
                        </article>

                        <article class="mb-4">
                            <img src="path-to-your-image/programar-es-dificil.jpg" alt="¿Es difícil programar?" class="img-fluid mb-3" />
                            <h2>¿Es difícil programar?</h2>
                            <p>¿Te preguntas si programar es realmente tan complicado? En este artículo desglosamos los desafíos y te ofrecemos consejos prácticos para superar los obstáculos comunes en el aprendizaje de la programación.</p>
                            <a href="/post/2" class="btn btn-primary">Leer más</a>
                        </article>

                        <article class="mb-4">
                            <img src="path-to-your-image/drama-tech.jpg" alt="Drama Tech" class="img-fluid mb-3" />
                            <h2>Drama Tech: ¿Los comentarios son mala práctica?</h2>
                            <p>Los comentarios en el código siempre han sido un tema de debate. Analizamos diferentes puntos de vista y te ofrecemos recomendaciones sobre cómo comentar tu código de manera efectiva.</p>
                            <a href="/post/3" class="btn btn-primary">Leer más</a>
                        </article>

                        <article class="mb-4">
                            <img src="path-to-your-image/chat-gpt4.jpg" alt="Chat GPT-4" class="img-fluid mb-3" />
                            <h2>Chat GPT-4 y el Futuro de la IA</h2>
                            <p>Con el lanzamiento de GPT-4, la inteligencia artificial está dando un salto significativo. Exploramos las nuevas capacidades de GPT-4 y cómo puede impactar el desarrollo de aplicaciones y servicios.</p>
                            <a href="/post/4" class="btn btn-primary">Leer más</a>
                        </article>

                        <article class="mb-4">
                            <img src="path-to-your-image/alpine-linux.jpg" alt="Alpine Linux" class="img-fluid mb-3" />
                            <h2>Cómo usar Alpine Linux en VirtualBox</h2>
                            <p>Aprende a configurar Alpine Linux en una máquina virtual utilizando VirtualBox. Este tutorial te guiará a través del proceso de instalación y configuración de esta ligera distribución de Linux.</p>
                            <a href="/post/5" class="btn btn-primary">Leer más</a>
                        </article>
                    </div>
                </main>

                <aside class="col-md-4">
                    {/* <!-- Tarjeta para Lenguajes de Programación --> */}
                    <div class="card2 mb-4">
                        <div class="card-header">
                            Lenguajes de Programación
                        </div>
                        <ul class="list-group list-group-flush list-aside">
                            <li class="list-group-item"><a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer">Python</a></li>
                            <li class="list-group-item"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript</a></li>
                            <li class="list-group-item"><a href="https://docs.oracle.com/en/java/" target="_blank" rel="noopener noreferrer">Java</a></li>
                            <li class="list-group-item"><a href="https://en.cppreference.com/w/" target="_blank" rel="noopener noreferrer">C++</a></li>
                            <li class="list-group-item"><a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer">C#</a></li>
                            <li class="list-group-item"><a href="https://www.ruby-lang.org/en/documentation/" target="_blank" rel="noopener noreferrer">Ruby</a></li>
                            <li class="list-group-item"><a href="https://www.php.net/docs.php" target="_blank" rel="noopener noreferrer">PHP</a></li>
                        </ul>
                    </div>

                    {/* <!-- Tarjeta para Librerías y Frameworks --> */}
                    <div class="card2 mb-4">
                        <div class="card-header">
                            Librerías y Frameworks
                        </div>
                        <ul class="list-group list-group-flush list-aside">
                            <li class="list-group-item"><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React</a></li>
                            <li class="list-group-item"><a href="https://angular.io/docs" target="_blank" rel="noopener noreferrer">Angular</a></li>
                            <li class="list-group-item"><a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">Vue.js</a></li>
                            <li class="list-group-item"><a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank" rel="noopener noreferrer">Bootstrap</a></li>
                        </ul>
                    </div>



                    <div class="card2 mb-4">
                        <div class="card-header">
                            Artículos interesantes
                        </div>
                        <ul class="list-group list-group-flush list-aside">
                            <li class="list-group-item"><a href="#">Backend</a></li>
                            <li class="list-group-item"><a href="#">Bases de Datos</a></li>
                            <li class="list-group-item"><a href="#">Blockchain</a></li>
                            <li class="list-group-item"><a href="#">CI/CD</a></li>
                            <li class="list-group-item"><a href="#">Ciberseguridad</a></li>
                            <li class="list-group-item"><a href="#">Clase</a></li>
                            <li class="list-group-item"><a href="#">CSS</a></li>
                            <li class="list-group-item"><a href="#">Cursos de Programación</a></li>
                            <li class="list-group-item"><a href="#">Desarrollo de Software</a></li>
                            <li class="list-group-item"><a href="#">Desarrollo Profesional</a></li>
                            <li class="list-group-item"><a href="#">Drama Tech</a></li>
                            <li class="list-group-item"><a href="#">Frontend</a></li>
                            <li class="list-group-item"><a href="#">Fundamentos de Programación</a></li>
                            <li class="list-group-item"><a href="#">Gadgets</a></li>
                            <li class="list-group-item"><a href="#">Git</a></li>
                            <li class="list-group-item"><a href="#">Hacking</a></li>
                            <li class="list-group-item"><a href="#">Inteligencia Artificial</a></li>
                            <li class="list-group-item"><a href="#">JavaScript</a></li>
                            <li class="list-group-item"><a href="#">Libros de Programación</a></li>
                            <li class="list-group-item"><a href="#">Noticias</a></li>
                            <li class="list-group-item"><a href="#">Nueva Zelanda</a></li>
                            <li class="list-group-item"><a href="#">Opinión</a></li>
                            <li class="list-group-item"><a href="#">Productividad</a></li>
                            <li class="list-group-item"><a href="#">Python</a></li>
                            <li class="list-group-item"><a href="#">React JS</a></li>
                            <li class="list-group-item"><a href="#">Recursos / Herramientas</a></li>
                            <li class="list-group-item"><a href="#">Rendimiento y Optimización</a></li>
                            <li class="list-group-item"><a href="#">Review</a></li>
                            <li class="list-group-item"><a href="#">Ruta</a></li>
                            <li class="list-group-item"><a href="#">Solidity</a></li>
                            <li class="list-group-item"><a href="#">Testing</a></li>
                            <li class="list-group-item"><a href="#">Top</a></li>
                            <li class="list-group-item"><a href="#">Tutorial</a></li>
                            <li class="list-group-item"><a href="#">VsCode</a></li>
                            <li class="list-group-item"><a href="#">Web 3</a></li>
                        </ul>
                    </div>
                </aside>
            </div>

            <footer class="text-center mt-4">
                <p>&copy; 2024 Blog de Tecnología. Todos los derechos reservados.</p>
            </footer>
        </div>
    );
};
