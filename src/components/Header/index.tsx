import * as React from 'react';

// importing styles
import './styles.css';

function Header() {
  return (
      <div className="header">
        <div className="title">
          <h1><a href="/">Ricky Ma</a></h1>
        </div>
        <div className="nav">
          <div className="btn">
            {/* <Link to="/about">About Me</Link> */}
            <a href="/about">About Me</a>
          </div>
          <div className="btn">
            {/* <Link to="/projects">Projects</Link> */}
            <a href="/projects">Projects</a>
          </div>
          <div className="btn">
            {/* <Link to="/courses">Courses Taken</Link> */}
            <a href="/courses">Courses Taken</a>
          </div>
        </div>
      </div>
  );
}

export default Header;