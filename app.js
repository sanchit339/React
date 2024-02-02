import React from "react"; // from Node Module
import ReactDOM from "react-dom";
import Header from "./components/Header"; // Header.js 
import BodyComponent from "./components/Body";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";

const AppLayout = () => {
    return(
        <div className="app">
            <Header />
            {/* Outlet manages the children routes */}
            <Outlet /> 
        </div>
    )
};

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
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("react"));
// root.render(<AppLayout />) previously we were rendering this
root.render(<RouterProvider router={appRouter} />)