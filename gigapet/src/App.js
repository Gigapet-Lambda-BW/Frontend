import React from 'react';
import './App.css';
import FoodLog from './component/FoodLog';
import UserSettingsForm from './component/UserSettingsForm';
import UserRegistration from './component/UserRegistration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigapet</h1> 
        <FoodLog />
        <UserSettingsForm />
        <UserRegistration />
      </header>
    </div>
  );
}

export default App;
