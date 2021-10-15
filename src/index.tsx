import React from 'react';
import ReactDOM from 'react-dom';
import './Components and styles/styles/index.css';
import App from './Components and styles/Components/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {store} from "./Redux/store";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
