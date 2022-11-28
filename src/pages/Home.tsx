import React, {FC} from 'react';
import Header from "../components/Header";
import Top from "../components/Top";
import Destinations from "../components/Destinations";
import Footer from "../components/Footer";

const Home:FC = () => {
  return (
    <>
      <Header />
      <Top/>
      <Destinations/>
      <Footer/>
    </>
  );
};

export default Home;