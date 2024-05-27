import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Basket from "../pages/Basket/Basket";
import Home from "../pages/Home";
import Wishlist from "../pages/Wishlist/Wishlist";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Basket" element={<Basket/>} />
        <Route path="/Wishlist" element={<Wishlist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
