import React, { useContext, useEffect } from "react"; // Agrega useContext aquí
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";
import { BackendURL } from "./component/backendURL.js";

import { Home } from "./pages/home.js";
import { Registration } from "./pages/registration.js";
import { Login } from "./pages/login.js";
import { Payment } from "./pages/payment.js";
import { Blog } from "./pages/blog.js";
import { Courses } from "./pages/courses.js";
import { Student } from "./pages/student.js";
import { ResetPassword } from "./pages/reset-password.js";
import injectContext, { Context } from "./store/appContext.js"; // Asegúrate de importar Context

import { Navbar } from "./component/navbar.js";
import { Footer } from "./component/footer.js";

//create your first component
const Layout = () => {
    const { store, actions } = useContext(Context); // Ahora useContext debería funcionar correctamente
    useEffect(() => {
        if (!store.token && localStorage.getItem("jwt-token")) {
            actions.setToken(localStorage.getItem("jwt-token"));
        }
    }, []);

    const basename = process.env.BASENAME || "";

    if (!process.env.BACKEND_URL || process.env.BACKEND_URL === "") return <BackendURL />;

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Courses />} path="/courses" />
                        <Route element={<Student />} path="/student" />
                        <Route element={<Registration />} path="/registration" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Blog />} path="/blog" />
                        <Route element={<Payment />} path="/payment" />
                        <Route element={<ResetPassword />} path="/reset-password" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);

