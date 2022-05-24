import React from "react";
import ReactDOM from "react-dom/client";
import "./stylesheets/index.css";
import App from "./App";
//import Mongoose from "mongoose";
//import Express from 'express'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* const connectDB = async () => {
  Mongoose.connect(
    "mongodb+srv://john:2bRLK9GZX2jlaM0F@comp229-f2021.jlcqd.mongodb.net/list?retryWrites=true&w=majority"
  );
  const productSchema = new Mongoose.Schema({});
  const product = Mongoose.model("books", productSchema);
  const data = await product.find();
  console.warn(data);
  console.log("Connect to MongoDB");
};
connectDB();
 */
