import React, {FC} from 'react';
import Card from "./Card";

const Destinations:FC = () => {
  return (
    <section className="destinations">
      <div className="wrapper ">
        <h2>Check out these EPIC Destinations!</h2>
        <div className="destinations-wrap">
          <Card
            link="/services"
            type="Adventure"
            images="./images/img-1.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nihil."/>
          <Card
            link="/services"
            type="Luxury"
            images="./images/img-2.jpg"
            text="Architecto debitis deleniti eligendi explicabo ipsa ipsam nisi quo reprehenderit tenetur totam."/>
          <Card
            link="/services"
            type="Mystery"
            images="./images/img-3.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nihil."/>
          <Card
            link="/services"
            type="Adventure"
            images="./images/img-4.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nihil."/>
          <Card
            link="/services"
            type="Adrenaline"
            images="./images/img-5.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, nihil."/>
        </div>
      </div>
    </section>
  );
};

export default Destinations;