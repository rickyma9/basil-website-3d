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
            <img src={require("../../images/ricky.PNG")} />
          </div>
          <div className="text">
            <p>Hi my name is Ricky</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default About;