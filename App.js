import React from "react";
import ReactDOM from "react-dom/client";
import AppBar from "@mui/material/AppBar";
import Body from "./src/components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./src/components/Menu";
import Header from "./src/components/Header";

const Layout = () => (
    <>

        <Header/>
        <Body />

    </>
);

const appRouter=createBrowserRouter([
    {path:'/',
    element:<Layout/>
},
{
    path:'/menu/:id',
    element:<><Header></Header><Menu/></>
}
]
    
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);