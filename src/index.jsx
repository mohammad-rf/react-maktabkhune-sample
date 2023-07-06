import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Python from "./components/pages/ExtraPage";
import SignIn from "./components/pages/SignIn";




let App = () => {
  return (

    <>
      <BrowserRouter>

      <Routes>

        
        <Route path="/" element={<Home />} />
        <Route path="/python" element={<Python/>} />
        <Route path="/signin" element={<SignIn/>} />

      </Routes>
    </BrowserRouter>
    
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
