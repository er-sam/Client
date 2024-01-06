import React from "react";
import Navbar from "./Navbar/Navbar";
import Slider from "./Navbar/Corousel";
import Hero from "./Hero/Hero";
import Login from "./Auth/Login";
import Registration from "./Auth/Registration";
import Cart from "./Cart/Cart";
import Home from "./Home/Home";
import Dashboard from "./CRM/Dashboard";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path:'/cart',
    element: <Cart/>
  },
  {
    path:"/login",
    element : <Login/>
  }
]);

const App=()=>{
  return(
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App;
