import React from "react";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home";
import Deal from "./Deal";
import Cart from "./Cart";
import NotFound from "./NotFound";

function App() {
  return (

    // Task 1
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/deal" element={<Deal/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
