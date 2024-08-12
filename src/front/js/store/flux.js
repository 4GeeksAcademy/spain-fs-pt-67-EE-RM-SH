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
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/users",{
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ users: data })
                console.log(data)
            },


            

            getLesson: async () => {
                // const store=getStore()
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/lessons",{
                    method:"GET",
                    headers: {
                        Authorization:`Bearer ${store.token}`,
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ lessons: data })
                console.log(data)
            },


            
            getCourses: async () => {
                // const store=getStore()
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/courses",{
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ courses: data })
                console.log(data)
            },



            getOrders: async () => {
                // const store=getStore()
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/orders",{
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ orders: data })
                console.log(data)
            },


            getOrder_Items: async () => {
                // const store=getStore()
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/Order_Items",{
                    method:"GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ order_Items: data })
                console.log(data)
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
            }
        }
    };
};

export default getState;

