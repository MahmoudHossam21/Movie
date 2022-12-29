import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Tv from "./Components/Tv/Tv";
import Movie from "./Components/Movies/Movies";
import Pepole from "./Components/Pepole/Pepole";
import Network from "./Components/Network/Network";
import Layout from "./Components/Layout/Layout";
import About from "./Components/about/About";
import ItemDetiles from "./Components/ItemDetiles/ItemDetiles";
import Register from "./Components/signup/Register";
import Login from "./Components/signin/Login";
import Auth from "./Components/Layout/Auth";
export default function App() {
  function ProductRouts(props) {
    let token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to={"/login"} />;
    } else{
      return props.children
    }
  }

  let roures = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <ProductRouts><Home/></ProductRouts>},
        { path: "home", element:  <ProductRouts><Home/></ProductRouts>},
        { path: "tv", element: <ProductRouts><Tv/></ProductRouts> },
        { path: "movie", element: <ProductRouts><Movie/></ProductRouts> },
        { path: "pepole", element: <ProductRouts><Pepole/></ProductRouts> },
        { path: "network", element: <ProductRouts><Network/></ProductRouts> },
        { path: "about", element: <ProductRouts><About/></ProductRouts> },
        { path: "details/:id/:media", element: <ProductRouts><ItemDetiles/></ProductRouts> },
      ],
    },
    {
      path: "/",
      element: <Auth />,
      children: [
        { index: true, element: <Register /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={roures} />
    </>
  );
}
