import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

const App:FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} ></Route>
        <Route path="/services" element={<Services/>} ></Route>
        <Route path="/products" element={<Products/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
