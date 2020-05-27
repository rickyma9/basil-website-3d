import * as React from 'react';

// importing styles
import './styles.css';

// importing components

function About() {
  return (
    <div className="wrapper">
      <div className="about">
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