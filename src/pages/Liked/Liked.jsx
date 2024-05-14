import React, { useContext } from "react";
import "./Liked.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../../components/FoodItem/FoodItem";

const Liked = () => {
  const { saveLikedItems, food_list, removeFromLiked } =
    useContext(StoreContext);

  return (
    <div className="liked-page">
      <h2>Mis recetas favoritas</h2>
      <div className="liked-page-items">
        <br />
        <hr />
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (saveLikedItems[item.id] > 0) {
              console.log(item.name);
              return (
                <FoodItem
                  key={index}
                  id={item.id}
                  user={item.user}
                  userImage={item.userImage}
                  name={item.name}
                  image={item.image}
                  descriptiton={item.descriptiton}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Liked;
