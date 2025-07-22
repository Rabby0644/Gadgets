import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Components/Root/Root.jsx";
import Errorpage from "./Components/ErrorPage/Errorpage.jsx";
import Home from "./Components/Home/Home.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";
import ProductsGadgets from "./Components/PoroductGadgets/ProductsGadgets.jsx";
import ProductsDetils from "./Components/ProductsDetils/ProductsDetils.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "productsDetils/:product_id",
        element: <ProductsDetils></ProductsDetils>,
        loader: () => fetch("GadgetData.json"),
      },

      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
  <HelmetProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
  </HelmetProvider>
  </StrictMode>
);
