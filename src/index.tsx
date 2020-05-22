import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//   </React.StrictMode>,
//   document.getElementById('about')
// );

// ReactDOM.render(
//   <React.StrictMode>
    
//   </React.StrictMode>,
//   document.getElementById('projects')
// );

// ReactDOM.render(
//   <React.StrictMode>
    
//   </React.StrictMode>,
//   document.getElementById('courses')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
