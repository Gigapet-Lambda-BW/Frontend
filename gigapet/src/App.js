import React, { useState } from 'react';
import './App.css';
import UserSettingsForm from './component/UserSettingsForm';
import UserRegistration from './component/UserRegistration';
import { ArchivedFoodLog } from './component/ArchivedFoodLog';
import Navigation from './component/Navigation';
import Homepage from './component/Homepage';
import FoodLog from './component/FoodLog';

const dailyFoodLog = [];

function App() {

  const [ dailyFood, addDailyFood ] = useState([]);

  //current date
  const today = new Date();
  const date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();

  //container for date and complete list of food items

  const handleSubmit = (event) => {
      event.preventDefault();
      addDailyFood([...dailyFood, event.target.dailyFoodInput.value])

      dailyFoodLog.push({dailyFood, date})
      console.log(dailyFoodLog)
  };
  return (
    <div className="App">
      <Navigation />
      <FoodLog handleSubmit={handleSubmit} date={date} dailyFood={dailyFood}/>
      <ArchivedFoodLog displayedFood={dailyFoodLog}/>
    </div>
  );
}

export default App;