import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import App from './App';


ReactDOM.render(
  // <Provider >
    <Router>
      <App />
    </Router>
  // </Provider>
  ,
    document.getElementById("root")
   );


