import React, {FC} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Products:FC = () => {
  return (
    <>
      <Header />
      <div className="pages products">
        <h1>Products</h1>
      </div>
      <Footer/>
    </>
  );
};

export default Products;