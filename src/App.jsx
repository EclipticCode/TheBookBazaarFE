import React, { useState } from "react";
import BasicPage from "./assets/Components/BasicPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Marquee from "./assets/Components/Marquee";
import Feature from "./assets/Components/Feature";
import Socialmedia from "./assets/Components/Socialmedia";
import Footer from "./assets/Components/Footer";
import BooksList from "./assets/Components/BooksList";
import BookDetails from "./assets/Components/BookDetails";
import Cart from "./assets/Components/Cart";

const App = () => {

  const [cartItems , setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems([...cartItems , product])
  }

  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Marquee />
        <Routes>
          <Route path="/" element={<BooksList/>}></Route>
          <Route path="/product/:id" element={<BookDetails addToCart = { addToCart }/>}></Route>
          <Route path="/cart" element={<Cart cartItems = { cartItems }/>}></Route>
        </Routes>
      </BrowserRouter>
      <Feature />
      <Socialmedia />
      <Footer />
    </div>
  );
};

export default App;
