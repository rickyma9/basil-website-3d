import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Table from './components/Table'
import Header from './components/Header'
import About from './components/About'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    {/* <div id="projects">
      <h3>Projects I've worked on:</h3>
      <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" />
    </div>
    <br />
    <div id="courses">
      <h3>Courses I've taken:</h3>
      <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" />
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <React.StrictMode>
    <h2>About me: </h2>
    <About />
  </React.StrictMode>,
  document.getElementById('about')
);

ReactDOM.render(
  <React.StrictMode>
    <h2>Projects I've worked on:</h2>
    <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" />
  </React.StrictMode>,
  document.getElementById('projects')
);

ReactDOM.render(
  <React.StrictMode>
    <h2>Courses I've taken:</h2>
    <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" />
  </React.StrictMode>,
  document.getElementById('courses')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
