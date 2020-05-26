import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// importing components
import logo from './logo.svg';
import './styles/App.css';
import Table from './components/Table/'
import Header from './components/Header'
import About from './components/About/'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" />
          </Route>
          <Route path="/courses">
            <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      

      {/* <div id="about">
        <h2>About me: </h2>
      <About />
      </div>
        <div id="projects">
          <h2>Projects I've worked on:</h2>
          <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" />
        </div>
        <div id="courses">
          <h2>Courses I've taken:</h2>
          <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" />
        </div> */}
      </div>
  );
}

export default App;
