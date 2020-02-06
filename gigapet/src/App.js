import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import Welcome from './component/Welcome'
import './App.css';
import FoodLog from './component/FoodLog';
import UserSettingsForm from './component/UserSettingsForm';
import UserRegistration from './component/UserRegistration';
import { getToken } from './axiosAuth'

function App(props) {
  const signedIn = getToken()
  const [savedDish, setSavedDish] = useState([
    {
      name:''
    }
  ])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigapet</h1> 
        <UserRegistration />        
        <FoodLog signedIn={signedIn} />
        <Route exact path='/' component={UserSettingsForm} />

      </header>
    </div>
  );
}

export default App;
