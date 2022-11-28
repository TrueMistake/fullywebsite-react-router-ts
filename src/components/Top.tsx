import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Top:FC = () => {
  return (
    <div className="top">
      <div className="top-wrap">
        <h1 className="top-h1">adventure awaits</h1>
        <p className="top-text">What are you waiting for?</p>
        <div className="top-body">
          <Link to="/" className="top-started">get started</Link>
          <Link to="/" className="top-watch">watch trailer</Link>
        </div>
      </div>
    </div>
  );
};

export default Top;