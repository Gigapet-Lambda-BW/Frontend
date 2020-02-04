import React from 'react';
import './App.css';
import UserSettingsForm from './UserSettingsForm';
// import Login from './component/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigapet</h1> 
        <UserSettingsForm />
        {/* <Login /> */}
      </header>
    </div>
  );
}

export default App;
