import React, { useState } from 'react';


export function ArchivedFoodLog (props) {
    
    const displayedFood = props.displayedFood;

  //  const [ archivedFood, addArchivedFood ] = useState({});
    


    return (

        displayedFood[0] ?
        <div>
        date: {displayedFood.map(item => <p>{item.date}</p>)}
        <ul>
        food: {displayedFood.map((item) => <li>{item.dailyFood}</li>
        )}
        </ul>
        </div>
        :
        <div></ div>
        
    )
}