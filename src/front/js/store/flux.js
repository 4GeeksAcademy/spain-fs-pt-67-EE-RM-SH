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
                        return true;
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


            createUser: (email, password, name, lastname, role) => {
                fetch(process.env.BACKEND_URL + "/api/registration", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        name: name,
                        lastname: lastname,
                        role: role

                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta recibida:', data);
                    })
                    .catch(error => {
                        console.error('Hubo un problema con la solicitud:', error);
                    });
            },




            getLesson: async () => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + "/api/lessons", {
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

            createLesson: (url_video, category, title, description, author, user_id, course_id) => {
                fetch(process.env.BACKEND_URL + "/api/lessons", {
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
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta recibida:', data);
                    })
                    .catch(error => {
                        console.error('Hubo un problema con la solicitud:', error);
                    });
            },


            getCourses: async () => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + "/api/courses", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ courses: data })
                console.log(data)
            },

            createCourse: (name, description, price) => {
                fetch(process.env.BACKEND_URL + "/api/courses", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        description: description,
                        price: price
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta recibida:', data);
                    })
                    .catch(error => {
                        console.error('Hubo un problema con la solicitud:', error);
                    });
            },



            getOrders: async () => {
                // const store=getStore()
                const res = await fetch(process.env.BACKEND_URL + "/api/orders", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ orders: data })
                console.log(data)
            },


            crateOrders: (user_id, methods_payment, payment_date, total, status) => {
                fetch(process.env.BACKEND_URL + "/api/orders", {
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
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta recibida:', data);
                    })
                    .catch(error => {
                        console.error('Hubo un problema con la solicitud:', error);
                    });
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

            createOrder_Item: (quantity, course_id, order_id) => {
                fetch(process.env.BACKEND_URL + "/api/Order_Items", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        quantity: quantity,
                        course_id: course_id,
                        order_id: order_id
                    })
                })
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Error en la solicitud: ' + response.statusText);
                        }
                        return response.json();
                    })
                    .then(data => {
                        console.log('Respuesta recibida:', data);
                    })
                    .catch(error => {
                        console.error('Hubo un problema con la solicitud:', error);
                    });
            },


            addCourse: async (id, name) => {
                const { addCourses } = getStore()
                setStore({ addCourses: [...addCourses, { id, name }] })
            },

            logout: () => {
                localStorage.removeItem("jwt-token");
                setStore({ token: null });
            },

            setToken: (token) => {
                setStore({ token });
            },


            deleteUser: async (id) => {

                const res = await fetch(process.env.BACKEND_URL + `/api/user/${id}`, {
                    method: "DELETE",
                })
                if (!res.ok) {
                    alert("no se puede eliminar");
                } else {
                    getContacts();
                }
            },

            putUser: async (email, password, name, lastname, role) => {
                const actions = getActions();
                const store = getStore();

                const response = await fetch(process.env.BACKEND_URL + `${store.contactToEdit.id}`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "email": email,
                        "password": password,
                        "name": name,
                        "lastname": lastname,
                        "role": role

                    }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                if (response.ok) {
                    alert("contacto actualizado correctamente")
                    actions.getContacts();
                } else {
                    alert("no se puede actualizar");
                }
            },







        }
    };
};

export default getState;

