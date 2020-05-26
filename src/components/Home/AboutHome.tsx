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