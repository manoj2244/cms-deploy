import React from "react";
import AppRouter from "./router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <AppRouter />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default App;
