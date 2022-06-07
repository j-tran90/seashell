import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Navigation from "./Navigation";
import Inventory from "../views/Inventory";
import Cart from "../views/Cart";
import Register from "../views/Register";
import Login from "../views/Login";
import MyAccount from "../views/MyAccount";
import PrivateRoute from "./PrivateRoute";
import ChatRoom from "../views/ChatRoom";
import { useAuth } from "../contexts/AuthContext";

const RouteSwitch = () => {
  const { currentUser } = useAuth();
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          {!currentUser ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="/login" element={<MyAccount />} />
          )}
          {!currentUser ? (
            <Route path="/register" element={<Register />} />
          ) : (
            <Route path="/register" element={<MyAccount />} />
          )}
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
          <Route
            path="/chatroom"
            element={
              <PrivateRoute>
                <ChatRoom />
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
