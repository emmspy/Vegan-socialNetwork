import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.webp";
import tHeart from "../../assets/gHeart.png";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  return (
    <div>
      <nav className="navbar">
        <a href="/">
          <img src={logo} alt="" className="logo" />
        </a>
        <ul className="navbar-menu">
          <li
            onClick={() => setMenu("home")}
            className={menu === "home" ? "active" : ""}>
            Home
          </li>
          <li
            onClick={() => setMenu("menu")}
            className={menu === "menu" ? "active" : ""}>
            Menu
          </li>
          <li
            onClick={() => setMenu("contact")}
            className={menu === "contact" ? "active" : ""}>
            Contactanos
          </li>
        </ul>
        <div className="navbar-right">
          <div className="navbar-icon">
            <a href="/liked">
              <img src={tHeart} className="navbar-carrito" />
            </a>

            <div className="dot"></div>
          </div>
          <button onClick={()=> setShowLogin(true)} className="navbar-login">
            Iniciar sesion
          </button>
          <button onClick={() => setShowLogin(true)} className="navbar-signin">
            Registrarse
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
