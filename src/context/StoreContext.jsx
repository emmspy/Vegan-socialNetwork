import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

   const initialLikes =
     JSON.parse(localStorage.getItem("saveLikedItems")) || {};
     
   const [saveLikedItems, setSaveLikedItems] = useState(initialLikes);

  // Guardar likes en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem("saveLikedItems", JSON.stringify(saveLikedItems));
  }, [saveLikedItems]);

  const addLiked = (itemId) => {
    setSaveLikedItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromLiked = (itemId) => {
    //Resta 1 del contador asociado al itemId en likedItems.
    setSaveLikedItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  useEffect(() => {
    console.log(saveLikedItems);
  }, [saveLikedItems]);

  const contextValue = {
    food_list,
    saveLikedItems,
    setSaveLikedItems,
    addLiked,
    removeFromLiked,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
}
export default StoreContextProvider;
