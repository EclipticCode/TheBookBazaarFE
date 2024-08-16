import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./assets/Components/Navbar";
import Feature from "./assets/Components/Feature";
import Socialmedia from "./assets/Components/Socialmedia";
import Footer from "./assets/Components/Footer";
import BooksList from "./assets/Components/BooksList";
import BookDetails from "./assets/Components/BookDetails";
import Cart from "./assets/Components/Cart";
import Scroll from "./assets/Components/Scroll";
import Animate from "./assets/Components/Animate";

const App = () => {

  const [cartItems , setCartItems] = useState([])

  const location = useLocation()

  const addToCart = (product) => {
    setCartItems([...cartItems , product])
  }

  const shouldShowAnimateAndScroll = !(location.pathname.startsWith('/product/') || location.pathname === '/cart')

  return (
    <div>
      <Navbar />
      {shouldShowAnimateAndScroll && <Animate />}
      {shouldShowAnimateAndScroll && <Scroll />}
        <Routes>
          <Route path="/" element={<BooksList/>}></Route>
          <Route path="/product/:id" element={<BookDetails addToCart = { addToCart }/>}></Route>
          <Route path="/cart" element={<Cart cartItems = { cartItems }/>}></Route>
        </Routes>
      <Feature />
      <Socialmedia />
      <Footer />
    </div>
  );
};

export default App;
