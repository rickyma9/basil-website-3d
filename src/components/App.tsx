import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

// importing components
import logo from './logo.svg';
import '../styles/App.css';
import Table from './Table'
import Header from './Header'
import About from './About'


function App() {
  return (
    <div className="App">
      {/* <Switch >
        <Route path="/navbar">
          <Navbar />
        </Route>
        <Route path="/articles">
          <Articles />
        </Route>
      </Switch> */}

      
      <Header />
      <div id="about">
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
      </div>
    </div>
  );
}

export default App;
