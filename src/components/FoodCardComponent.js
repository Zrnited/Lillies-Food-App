import React from 'react'
import '../cssfiles/foodcard.css'

const FoodCardComponent = ({image, foodName, foodDetails}) => {
  return (
    <>
        <div className='food-info'>
            <img src={image} alt='food-avatar'/>
            <h2>{foodName}</h2>
            <p>{foodDetails}</p>
        </div>
    </>
  )
}

export default FoodCardComponent