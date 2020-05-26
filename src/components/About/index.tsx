import * as React from 'react';

// importing styles
import './styles.css';

// importing components
import Header from "../SimpleHeader/"

function About() {
  return (
    <div className="wrapper">
      <Header />
      <div className="about">
        <h2>About Me</h2>
        <div className="row">
          <div className="pic">
            <p>pic goes here</p>
          </div>
          <div className="text">
            <p>text goes here</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;