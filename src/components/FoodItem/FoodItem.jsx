import React, { useContext } from "react";
import "./FoodItem.css";
import rating from "../../assets/five-stars.webp";
import tHeart from "../../assets/theart.png";
import heart from "../../assets/heart.png";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, user, userImage, name, image, descriptiton }) => {
  const {saveLikedItems, addLiked,removeFromLiked} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="receta" />
        {!saveLikedItems[id] ? (
          <img
            className="transparent-liked"
            src={tHeart}
            onClick={() =>addLiked(id)}
          />
        ) : (
          <div>
            <img className="liked" src={heart} onClick={() => removeFromLiked(id)} />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={rating} alt="" className="food-item-rating" />
        </div>
        <div className="food-item-user-imageuser">
          <img src={userImage} alt="" className="food-item-user-img" />
          <p className="food-item-user">{user}</p>
        </div>
        <p className="food-item-desc">{descriptiton}</p>
      </div>
    </div>
  );
};

export default FoodItem;
