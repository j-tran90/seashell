import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../view/Home";
import Navigation from "./Navigation";
import Inventory from "../view/Inventory";
import Cart from "../view/Cart";
import Register from "../view/Register";
import Login from "../view/Login";
import MyAccount from "../view/MyAccount";
import PrivateRoute from "./PrivateRoute";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          {/* Protected Routes */}
          <Route
            path="/myaccount"
            element={
              <PrivateRoute>
                <MyAccount />
              </PrivateRoute>
            }
          />
          <Route
            path="/inventory"
            element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<h1>404 Not Found!</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default RouteSwitch;
