import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.scss';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
   
);
