import * as React from 'react';

// importing styles
import '../styles/Header.css';

function Home() {
  return (
    <div id="home">
      <div id="about">
        <h2>About me: </h2>
      {/* <About /> */}
      </div>
      <div id="projects">
        <h2>Projects I've worked on:</h2>
        {/* <Table headings={["Class / Event", "Project Name", "Project Description"]} body="Projects" /> */}
      </div>
      <div id="courses">
        <h2>Courses I've taken:</h2>
        {/* <Table headings={["Course Code", "Course Title", "Semester Taken", "Course Description"]} body="Courses" /> */}
      </div>
    </div>
  );
}

export default Home;