import React, {FC, useState} from 'react';
import {Link} from "react-router-dom";

const Header:FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const openMenu = () => {
    setMenu(!menu)
  }

  return (
    <header className="header">
      <div className="wrapper header-wrap">
        <Link to="/" className="header-logo">
          <img src="https://i.ytimg.com/vi/LgN8CdJZaIs/hqdefault.jpg" alt="" className="header-logo__img"/>
        </Link>
        <div className="burger" onClick={openMenu}>
          <svg width="512px" height="512px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"/></svg>
        </div>
        <div className={menu ? "mobile-menu active" : "mobile-menu"}>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <Link to="/" className="header-nav__link">Home</Link>
              </li>
              <li className="header-nav__item">
                <Link to="/services" className="header-nav__link">Services</Link>
              </li>
              <li className="header-nav__item">
                <Link to="/products" className="header-nav__link">Products</Link>
              </li>
            </ul>
          </nav>
          <Link to="/sing" className="header-sign">sign up</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;