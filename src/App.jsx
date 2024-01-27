import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/animation/Text.scss";
import "./stylesheets/animation/Wave.css";
import "./stylesheets/Index.css";
import "./stylesheets/App.css";
import RouteSwitch from "./components/RouteSwitch";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouteSwitch />
      </AuthProvider>
    </>
  );
}

export default App;
