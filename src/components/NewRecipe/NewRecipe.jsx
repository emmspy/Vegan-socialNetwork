import React from 'react'
import "./NewRecipe.css"
import cross from "../../assets/cross.png"

const NewRecipe = ({setShowRecipe}) => {
  return (
    <div className="recipe-popup">
      <form className="recipe-popup-container">
        <div className="recipe-popup-title">
          <h2>Nueva Receta</h2>
          <img
            src={cross}
            onClick={() => setShowRecipe(false)}
            className="recipe-popup-title-cross"
          />
        </div>
        <div className="recipe-popup-inputs">
          <input type="text" placeholder="Titulo" required />
          <textarea type="textbox" placeholder="Agrega una descripcion" />
          <input type="file" accept=".jpg" />
          <button className="recipe-popup-inputs">
            publicar
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRecipe