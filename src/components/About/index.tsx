import * as React from 'react';

// importing styles
import './styles.css';

function About() {
  return (
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
    
  );
}

export default About;