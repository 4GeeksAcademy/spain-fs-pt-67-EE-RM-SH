const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            users: [],
            courses: [],
            lessons: [],
            orders: [],
            order_Items: [],
            addCourses: [],
            // resetpassword: {
            //     id: "",
            //     newpassword: "",

            // },

            token: localStorage.getItem("jwt-token") || null, // Inicializa el token desde localStorage
        },
        actions: {
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            changeColor: (index, color) => {
                const store = getStore();

                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                setStore({ demo });
            },

            createUser: async (email, password, profile, name, lastname, role) => {
                try {
                    const response = await fetch(`${process.env.BACKEND_URL}/api/registration`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'  // Indica que el cuerpo de la solicitud es JSON
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,
                            name: name,
                            lastname: lastname,
                            role: role,
                            profile: profile
                        })  // Convierte el cuerpo de la solicitud a una cadena JSON
                    });

                    const data = await response.json();

                    if (response.ok) {

                        console.log('Respuesta recibida:', data);
                        localStorage.setItem("jwt-token", data.access_token);
                        setStore({ token: data.access_token });
                        return true;
                    }

                    else {
                        console.log("Login failed:", data.message);
                        return false;
                    }
                } catch (e) {
                    console.log("Error durante el registro:", e);
                    return false;
                }
            },


            login: async (email, password) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/login", {
                        method: "POST",
                        body: JSON.stringify({ email, password }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });
                    const data = await response.json();
                    console.log(data)

                    if (response.ok) {
                        localStorage.setItem("jwt-token", data.access_token);
                        setStore({ token: data.access_token });
                        return true

                    } else {
                        console.log("Login failed:", data.message);
                        return false;
                    }
                } catch (e) {
                    console.log("Error during login:", e);
                    return false;
                }
            },

            getUsers: async () => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + "/api/users", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ users: data })
                console.log(data)
            },

            getUser: async (id) => {
                const res = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ users: data })
                console.log(data)
            },




            getLessons: async () => {
                const token = localStorage.getItem("jwt-token"); // Obtener el token del localStorage

                if (!token) {
                    console.error("No token found, cannot fetch lessons.");
                    return;
                }

                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/lessons`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}` // Incluir el token en el encabezado
                        }
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setStore({ lessons: data }); // Guardar las lecciones en el store
                        console.log(data);
                    } else {
                        console.log("Failed to fetch lessons:");
                        // Manejo adicional dependiendo del código de estado
                    }
                } catch (error) {
                    console.error("An error occurred while fetching lessons:", error);
                }
            },



            getLesson: async (id) => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + `/api/lesson${id}`, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${store.token}`,
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ lessons: data })
                console.log(data)
            },


            createLesson: async (url_video, category, title, description, author, user_id, course_id) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/lesson", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            url_video: url_video,
                            category: category,
                            title: title,
                            description: description,
                            author: author,
                            user_id: user_id,
                            course_id: course_id
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Error en la solicitud: ' + response.statusText);
                    }

                    const data = await response.json();
                    console.log('Respuesta recibida:', data);
                } catch (error) {
                    console.error('Hubo un problema con la solicitud:', error);
                }
            },



            getCourses: async () => {
                const token = localStorage.getItem("jwt-token"); // Obtener el token del localStorage

                if (!token) {
                    console.error("No token found, cannot fetch courses.");
                    return;
                }

                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/courses`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": `Bearer ${token}` // Incluir el token en el encabezado
                        }
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setStore({ courses: data }); // Guardar los cursos en el store
                        console.log(data);
                    } else {
                        console.error("Failed to fetch courses:", res.statusText);
                        // Manejo adicional dependiendo del código de estado
                    }
                } catch (error) {
                    console.error("An error occurred while fetching courses:", error);
                }
            },



            getCourse: async (id) => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + `/api/course${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ courses: data })
                console.log(data)
            },


            createCourse: async (name, description, price) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/course", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            description: description,
                            price: price
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Error en la solicitud: ' + response.statusText);
                    }

                    const data = await response.json();
                    console.log('Respuesta recibida:', data);
                } catch (error) {
                    console.error('Hubo un problema con la solicitud:', error);
                }
            },




            getOrders: async () => {
                try {
                    const res = await fetch(`${process.env.BACKEND_URL}/api/courses`, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    });

                    if (res.ok) {
                        const data = await res.json();
                        setStore({ orders: data }); // Asegúrate de que `setStore` esté correctamente definido y accesible
                        console.log(data);
                    } else {
                        console.log("Failed to fetch orders:")
                        // Manejo adicional dependiendo del código de estado
                    }
                } catch (error) {
                    console.error("An error occurred while fetching orders:", error);
                }
            },




            getOrder: async (id) => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + `/api/order${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ orders: data })
                console.log(data)
            },


            crateOrders: async (user_id, methods_payment, payment_date, total, status) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/order", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: user_id,
                            methods_payment: methods_payment,
                            payment_date: payment_date,
                            total: total,
                            status: status
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Error en la solicitud: ' + response.statusText);
                    }

                    const data = await response.json();
                    console.log('Respuesta recibida:', data);
                } catch (error) {
                    console.error('Hubo un problema con la solicitud:', error);
                }
            },



            getOrder_Items: async () => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + "/api/Order_Items", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ order_Items: data })
                console.log(data)
            },


            getOrder_Item: async (id) => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + `/api/Order_Item${id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ order_Items: data })
                console.log(data)
            },

            createOrder_Item: async (quantity, course_id, order_id) => {
                try {
                    const response = await fetch(process.env.BACKEND_URL + "/api/Order_Item", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            quantity: quantity,
                            course_id: course_id,
                            order_id: order_id
                        })
                    });

                    if (!response.ok) {
                        throw new Error('Error en la solicitud: ' + response.statusText);
                    }

                    const data = await response.json();
                    console.log('Respuesta recibida:', data);
                } catch (error) {
                    console.error('Hubo un problema con la solicitud:', error);
                }
            },






            // Aquí empiezan los DELETE
            deleteUser: async (id) => {
                const actions = getActions();
                const res = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getUsers();
                }
            },

            deleteCourse: async (id) => {
                const actions = getActions();
                const res = await fetch(process.env.BACKEND_URL + `/api/course/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getUsers();
                }
            },

            deleteLesson: async (id) => {
                const actions = getActions();
                const res = await fetch(process.env.BACKEND_URL + `/api/lesson/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getUsers();
                }
            },

            deleteOrder: async (id) => {
                const actions = getActions();
                const res = await fetch(process.env.BACKEND_URL + `/api/order/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getUsers();
                }
            },

            deleteOrderItem: async (id) => {
                const actions = getActions();
                const res = await fetch(process.env.BACKEND_URL + `/api/order_item/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    actions.getUsers();
                }
            },


            logout: () => {
                localStorage.removeItem("jwt-token");
                setStore({ token: null });
            },

            setToken: (token) => {
                setStore({ token });
            },


            handleLogout: async () => {
                try {
                    const token = localStorage.getItem("token");

                    const response = await fetch(process.env.BACKEND_URL + "/api/logout", {
                        method: "DELETE",
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    if (response.ok) {
                        // Eliminar el token del localStorage
                        localStorage.removeItem("token");
                        alert("Sesión cerrada con éxito");
                    } else {
                        alert("Error al cerrar sesión. Inténtalo de nuevo.");
                    }
                } catch (error) {
                    console.error("Error al cerrar sesión:", error);
                    alert("Ocurrió un error. Inténtalo de nuevo.");
                }
            },



            // Aquí empiezan los PUT
            putUser: async (id, password) => {
                try {
                    // Genera un salt y aplica bcrypt al password
                    const salt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(password, salt);

                    // Realiza la solicitud PUT con la contraseña encriptada
                    const response = await fetch(process.env.BACKEND_URL + `api/user${id}`, {
                        method: "PUT",
                        body: JSON.stringify({
                            password: hashedPassword,  // Envía la contraseña encriptada
                        }),
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    });

                    if (response.ok) {
                        alert("Usuario actualizado correctamente");
                        getUser();  // Asumo que esta función recarga los datos del usuario actualizado
                    } else {
                        alert("No se puede actualizar");
                    }
                } catch (e) {
                    console.error("Error actualizando usuario:", e);
                    alert("Hubo un error en la actualización del usuario");
                }
            },



            putLesson: async (id, url_video, category, title, description, author) => {

                // const store = getStore();

                const response = await fetch(process.env.BACKEND_URL + `api/lesson${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        url_video: url_video,
                        category: category,
                        title: title,
                        description: description,
                        author: author

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert("usuario actualizado correctamente")
                    getUser();
                } else {
                    alert("no se puede actualizar");
                }
            },


            putCourse: async (id, name, description, price, clases, price_original) => {

                // const store = getStore();

                const response = await fetch(process.env.BACKEND_URL + `api/course${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        name: name,
                        description: description,
                        price: price,
                        clases: clases,
                        price_original: price_original

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert("usuario actualizado correctamente")
                    getUser();
                } else {
                    alert("no se puede actualizar");
                }
            },


            putOrder: async (id, methods_payment, payment_date, total, status) => {

                // const store = getStore();

                const response = await fetch(process.env.BACKEND_URL + `api/order${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        methods_payment: methods_payment,
                        payment_date: payment_date,
                        total: total,
                        status: status,

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert("usuario actualizado correctamente")
                    getUser();
                } else {
                    alert("no se puede actualizar");
                }
            },


            putOrderItem: async (id, quantity) => {

                // const store = getStore();

                const response = await fetch(process.env.BACKEND_URL + `api/order_item${id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "quantity ": quantity

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert("usuario actualizado correctamente")
                    getUser();
                } else {
                    alert("no se puede actualizar");
                }
            },


            addCourses: (curso) => {
                const store = getStore();
                // Verificar si el curso ya está en el carrito
                const isCourseInCart = store.addCourses.some(item => item.id === curso.id);

                if (!isCourseInCart) {
                    // Si no está en el carrito, añadir el curso
                    setStore({ addCourses: [...store.addCourses, curso] });
                } else {
                    // Si ya está en el carrito, no hacer nada (opcional: podrías mostrar un mensaje al usuario aquí)
                    console.log('El curso ya está en el carrito.');
                }
            },


            removeCourse: (courseId) => {
                const store = getStore();
                // Filtrar el array de cursos para eliminar el curso con el ID especificado
                const updatedCourses = store.addCourses.filter(course => course.id !== courseId);
                // Actualizar el estado con el array filtrado
                setStore({ addCourses: updatedCourses });
            },



        }
    };
};

export default getState;

