import * as React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Ricky Ma</h1>
      </div>
      <div className="nav">
        <div className="btn">
          <a href="#about">About Me</a>
        </div>
        <div className="btn">
          <a href="#projects">Projects</a>
        </div>
        <div className="btn">
          <a href="#courses">Courses Taken</a>
        </div>
      </div>
      
    </div>
  );
}

export default Header;