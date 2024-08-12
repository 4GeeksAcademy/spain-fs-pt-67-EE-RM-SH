const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            user: [],
            course: [],
            lesson: [],
            orders: [],
            order_item: [],
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

            addCourse: async (id, name) => {
                const { addCourses } = getStore()
                setStore({ addCourses: [...addCourses, { id, name }] })
            },

            getLesson: async () => {
                const store=getStore()
                const res = await fetch("https://zany-lamp-69vgw5j9rvrvcrxpx-3001.app.github.dev/api/lessons",{
                    method:"GET",
                    headers: {
                        Authorization:`Bearer ${store.token}`,
                        "Content-Type": "application/json"
                    }
                })
                const data = await res.json()
                setStore({ lesson: data })
                console.log(data)
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

