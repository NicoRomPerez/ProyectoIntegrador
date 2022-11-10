import "./App.scss";
import { Route, Routes } from "react-router-dom";
import ComponenteDePrueba from "./Components/ComponenteDePrueba";
import Home from "./Components/Home";
import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import React, { useState } from "react";
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';

function App() {
  const [logueado, setLog] = useState(false);
    const [viewGalery, setViewGalery] = useState(false);
    const images = [9, 8, 7, 6, 5].map((number) => ({
    src: `https://placedog.net/${number}00/${number}00?id=${number}`
  }));

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home log={logueado} />}></Route>
        <Route path="/detalle" element={<ProductDetail />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/images" element={<Carousel images={images} style={{ height: 500, width: 800 }} /> }></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<ComponenteDePrueba />} />
      </Routes>
      
    </div>
  );
}

export default App;
