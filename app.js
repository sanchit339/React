import React, { lazy , Suspense, useEffect, useState} from "react"; // from Node Module
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header"; // Header.js 
import BodyComponent from "./src/components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./src/components/About";
import ContactUs from "./src/components/ContactUs";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";
import userContext from "./src/utils/UserContext";
import { Provider } from "react-redux"
import appStore from "./src/utils/appStore";
import Cart from "./src/components/Cart";

const AppLayout = () => {

    // You want to modify the userInfoAfter the login
    const [userName , setUserName ] = useState();
    useEffect(() => {
        const data = {
            name : "Sanchit"
        }
        setUserName(data.name);
    }, [])

    return(
        // Takes Store as props -> just like the context provider we have redux store provider
        <div className="app">
            <Provider store={ appStore }> 
                <userContext.Provider value={{ loggedInUser : userName , setUserName }}>
                    <Header />
                    {/* Outlet manages the children routes */}
                    <Outlet /> 
                </userContext.Provider>
            </Provider>
        </div>
    )
};


const Grocery = lazy(() => import("./src/components/Grocery"));

const appRouter = createBrowserRouter([
    {
        path:"/", // this is the parent route 
        element: <AppLayout />,
        children:[      // will be passing the array
            {
                path:"/",
                element: <BodyComponent />
            },
            {
                path:"/about",
                element: <About />
            },
            {
                path:"/contact",
                element:<ContactUs />
            },
            {
                path:"/grocery",
                // till the Grocery gets loaded the fallback gets trigered
                // it can load in chunks
                element:(
                    <Suspense fallback ={<h1>Loading.....</h1>}> 
                            <Grocery />
                    </Suspense>
                ),
            },
            {
                path:"/cart",
                element: <Cart />
            },
            {
                path:"/restaurant/:id" ,
                element:<RestaurantMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("react"));
// root.render(<AppLayout />) previously we were rendering this
root.render(<RouterProvider router={appRouter} />)