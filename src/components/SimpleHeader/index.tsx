import * as React from 'react';

// importing styles
import './styles.css';

function Header() {
  return (
      <div id="header">
        <div className="title">
          <h1><a href="/">Ricky Ma</a></h1>
        </div>
        <div className="nav">
          <div className="btn">
            <a href="/about">About Me</a>
          </div>
          <div className="btn">
            <a href="/projects">Projects</a>
          </div>
          <div className="btn">
            <a href="/courses">Courses Taken</a>
          </div>
        </div>
      </div>
  );
}

export default Header;