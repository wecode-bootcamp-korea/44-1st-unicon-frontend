import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Main from './pages/Main/Main';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Cart from './pages/Cart/Cart';
import Showroom from './pages/Showroom/Showroom';
import Order from './pages/Order/Order';
import PurchasedItems from './pages/PurchasedItems/PurchasedItems';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/detail/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/showroom" element={<Showroom />} />
        <Route path="/order" element={<Order />} />
        <Route path="/purchaseditems" element={<PurchasedItems />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
