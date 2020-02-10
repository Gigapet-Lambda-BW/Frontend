import React, { useState } from 'react';


const FoodItem = ({ item, deleteFoodItem }) => {
  return (
      <div>
          <h3>Name: {item.name}</h3>
          <button onClick={() => deleteFoodItem(item.id)}>{`Delete ${item.name}`}</button>
      </div>
  )
}

export default FoodItem;