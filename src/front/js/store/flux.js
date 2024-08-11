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
			token:""
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			login:async(email, password) => {
				try {
					const response=await fetch(process.env.BACKEND_URL + "/api/login",{
						method: "POST",
						headers:{
							"Content-Type":"application/json"
						},
						body:JSON.stringify({email,password})
					});
					if (!response.ok){
						throw new Error("authentication-error")
					}
					const data= await response.json();
					localStorage.setItem("token",data.token)
					setStore ({token:data.token})
				} catch (error) {
					console.error("[flux.login]",error)
				}
			}
			

			}
		}
	};

export default getState;
