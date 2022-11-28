import React, {FC} from 'react';
import {Link} from "react-router-dom";

const Footer:FC = () => {
  return (
    <div className="footer">
      <div className="wrapper footer-wrap">
        <Link to="/" className="header-logo">
          <img src="https://i.ytimg.com/vi/LgN8CdJZaIs/hqdefault.jpg" alt="" className="header-logo__img"/>
        </Link>
        <div className="copy">@copy FullyWebsite</div>
      </div>
    </div>
  );
};

export default Footer;