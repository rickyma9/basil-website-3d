import React from 'react';

// importing components
import './styles.css';


function ProjectTable() {

  return (
    <div className="table">
      <table id="homeTable">
        <tr className="dark">
          <td className="image"><img src={require("../../images/utilitrend.PNG")} /></td>
          <td>UtiliTrend</td>
          <td>project description</td>
        </tr>
        <tr className="light">
          <td className="image"><img src={require("../../images/jeopardysearch.PNG")} /></td>
          <td>Jeopardy Search!</td>
          <td>project description</td>
        </tr>
        <tr className="dark">
          <td className="image"><img src={require("../../images/phase5.PNG")} /></td>
          <td>A&amp;M Creamery Database</td>
          <td>project description</td>
        </tr>
      </table>
    </div>
  );
}

export default ProjectTable;