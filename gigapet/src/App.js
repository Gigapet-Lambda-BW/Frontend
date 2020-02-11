import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import './App.css';
import { fetchFoodItem, deleteFoodItem, addFoodItem } from './actions/foodActions'
import ProtectedRoute from './component/ProtectedRoute'
import FoodItem  from './component/FoodItem';
import Navigation from './component/Navigation';
import Homepage from './component/Homepage';
import FoodLog from './component/FoodLog';

const dailyFoodLog = [];

function App(props) {
  useEffect(() => {
    props.fetchFoodItem();
  }, []);
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
      {props.foodItemsArray.map(item => (
        <FoodItem item={item} key={item.id} deleteFoodItem={props.deleteFoodItem} />
      ))}
      <FoodLog handleSubmit={handleSubmit} date={date} dailyFood={dailyFood}/>
      {/* <FoodItem displayedFood={dailyFoodLog}/> */}
      {/* <ProtectedRoute exact path="/food-log" component={FoodLog} /> */}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    foodItemsArray: state.foodItemsArray,
    isLoading: state.isLoading,
    error: state.error
  };
}

const mapDispatchToProps = {
  fetchFoodItem,
  addFoodItem,
  deleteFoodItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);