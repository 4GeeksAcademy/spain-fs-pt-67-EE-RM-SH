import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import { BackendURL } from "./component/backendURL.js";

import { Home } from "./pages/courses.js";
import { Login } from "./pages/login.js";
import { Payment } from "./pages/payment.js";
import { Blog } from "./pages/blog.js";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                    <Route element={<Home />} path="/" />
                        <Route element={<Courses />} path="/courses" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Blog />} path="/blog" />
                        <Route element={<Payment />} path="/payment/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
