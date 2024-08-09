const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            message: null,
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
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

                    if (response.ok) {
                        localStorage.setItem("jwt-token", data.token);
                        setStore({ token: data.token });
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

