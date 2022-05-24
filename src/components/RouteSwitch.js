import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Navigation from "./Navigation";
import Inventory from "../view/Inventory";
import Cart from "../view/Cart";
import Register from "../view/Register";
import Login from "../view/Login";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
