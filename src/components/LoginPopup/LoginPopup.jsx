import React, { useState } from "react";
import "./LoginPopup.css";
import cross from "../../assets/cross.png";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Registrarse");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={cross}
            className="login-popup-title-cross"
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Inicia Sesion" ? (
            <></>
          ) : (
            <input type="text" placeholder="Nombre" required />
          )}
          <input type="email" placeholder="email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currState === "Registrarse" ? "Crear cuenta" : "Iniciar sesion"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Para continuar acepta los terminos y condiciones</p>
        </div>
        {currState === "Registrarse" ? (
          <p>
            Ya tienes una cuenta?
            <span onClick={() => setCurrState("Inicia Sesion")}>
              Inicia Sesion
            </span>
          </p>
        ) : (
          <p>
            Aun no te has registrado?
            <span onClick={() => setCurrState("Registrarse")}>
              {"   "}
              Crear cuenta
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
