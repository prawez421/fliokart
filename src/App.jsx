import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import ForYou from './pages/forYou/pages';
import Fashion from "./pages/fashion/Pages";
// import Mobiles from "./pages/Mobiles/Mobiles";
// import Electronics from "./pages/Electronics/Electronics";
// import Beauty from "./pages/Beauty/Beauty";
// import HomeLiving from "./pages/HomeLiving/HomeLiving";
// import Appliances from "./pages/Appliances/Appliances";
// import Toys from "./pages/Toys/Toys";
// import Food from "./pages/Food/Food";
// import Auto from "./pages/Auto/Auto";
// import Sports from "./pages/Sports/Sports";
// import Furniture from "./pages/Furniture/Furniture";
// import Books from "./pages/Books/Books";
// import TwoWheelers from "./pages/TwoWheelers/TwoWheelers";
// import Login from "./pages/Login/Login";
// import Cart from "./pages/Cart/Cart";
// import ProductDetails from "./pages/Product/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<ForYou />} />
        <Route path="/fashion" element={<Fashion />} />
        {/* <Route path="/fashion" element={<Fashion />} />

        <Route path="/mobiles" element={<Mobiles />} />

        <Route path="/electronics" element={<Electronics />} />

        <Route path="/beauty" element={<Beauty />} />

        <Route path="/home-living" element={<HomeLiving />} />

        <Route path="/appliances" element={<Appliances />} />

        <Route path="/toys" element={<Toys />} />

        <Route path="/food" element={<Food />} />

        <Route path="/auto" element={<Auto />} />

        <Route path="/sports" element={<Sports />} />

        <Route path="/furniture" element={<Furniture />} />

        <Route path="/books" element={<Books />} />

        <Route path="/two-wheelers" element={<TwoWheelers />} />

        <Route path="/login" element={<Login />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/product/:id" element={<ProductDetails />} /> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;