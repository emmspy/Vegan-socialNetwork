import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../context/StoreContext'
import FoodItem from '../components/FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const{food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
        <h2>Platillos destacados</h2>
        <div className="food-display-list">
          {food_list.map((item,index)=>{
            if(category==="All" || category===item.category ){
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
  )
}

export default FoodDisplay