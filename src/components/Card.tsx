import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface CardObject {
  link: string,
  type: string,
  images: string,
  text: string
}

const Card: FC<CardObject> = ({link, type, images, text}) => {
  return (
    <Link to={link} className="card">
      <img src={images} alt="" className="card-img"/>
      <div className="card-body">
        <div className="card-body__type">{type}</div>
        <div className="card-body__text">{text}</div>
      </div>
    </Link>
  );
};

export default Card;