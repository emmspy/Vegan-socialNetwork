import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.webp";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={logo} alt="" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
            accusantium cupiditate quasi autem, a unde ex eaque nemo nesciunt
            voluptas!
          </p>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>Sobre nosotros</li>
            <li>Politica de privacidad</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contactanos</h2>
          <ul>
            <li>+57 302444444444</li>
            <li>veganColombia@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 · VeganColombia - All right reserved.
      </p>
    </div>
  );
};

export default Footer;
