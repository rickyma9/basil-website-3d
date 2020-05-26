import * as React from 'react';

// importing styles
import './styles.css';

// importing components
import Header from '../Header/'
import About from './AboutHome'
import ProjectTable from './ProjectTableHome'
import CoursesTable from './CoursesTableHome'

function Home() {
  return (
    
    <div id="home">
      <Header />
      <div id="about">
        <h2>About me: </h2>
        <About />
        <div className="rightbtn">
          <a href="/about">More >></a>
        </div>
      </div>
      <div id="projects">
        <h2>Projects I've worked on:</h2>
        <ProjectTable />
        <div className="rightbtn">
          <a href="/projects">More >></a>
        </div>
      </div>
      <div id="courses">
        <h2>Courses I've taken:</h2>
        <CoursesTable />
        <div className="rightbtn">
          <a href="/courses">More >></a>
        </div>
      </div>
    </div>
  );
}

export default Home;