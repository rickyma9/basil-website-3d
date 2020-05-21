import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Table from './Table'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" />
    <br />
    <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
