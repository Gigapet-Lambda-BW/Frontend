import React from 'react';
import './App.css';
import UserSettingsForm from './UserSettingsForm';
import UserRegistration from './UserRegistration';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gigapet</h1> 
        <UserSettingsForm />
        <UserRegistration />
      </header>
    </div>
  );
}

export default App;
