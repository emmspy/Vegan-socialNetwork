import React from "react";
import "./Header.css";

const Header = ({setShowRecipe}) => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Disfruta y comparte de recetas 100% Veganas</h2>
        <p>
          Donde los amantes de la cocina pueden compartir sus recetas favoritas
          y descubrir nuevas inspiraciones culinarias! En nuestra plataforma,
          encontrarás una amplia variedad de recetas compartidas por usuarios de
          todo el mundo, desde platos tradicionales caseros hasta creaciones
          culinarias innovadoras.
        </p>
        <button onClick={() => setShowRecipe(true)}>Agregar receta</button>
      </div>
    </div>
  );
};

export default Header;
