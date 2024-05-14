import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../FoodDisplay/FoodDisplay'
import Liked from '../Liked/Liked'
import NewRecipe from '../../components/NewRecipe/NewRecipe'

const Home = () => {
  
  const [category,setCategory] = useState("All")
  const [showRecipe, setShowRecipe] = useState(false);

  return (
    <>
      {showRecipe ? <NewRecipe setShowRecipe={setShowRecipe} /> : <></>}
      <div>
        <Header setShowRecipe={setShowRecipe} />
        <ExploreMenu category={category} setCategory={setCategory} />
        <FoodDisplay category={category} />
      </div>
    </>
  );
}

export default Home