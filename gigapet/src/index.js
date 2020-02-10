import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { dietReducer } from "./reducers/reducers"
import App from './App';


const store = createStore(dietReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  ,
    document.getElementById("root")
   );


