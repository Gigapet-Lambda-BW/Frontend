import React from 'react';
import './App.css';
import FoodLog from './component/FoodLog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigapet</h1> 
        <FoodLog />
      </header>
    </div>
  );
}

export default App;
