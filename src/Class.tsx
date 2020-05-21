import * as React from 'react';
import './styles/Class.css';

class Class extends React.Component<React.Props<String, String, String, String>> {
  render () {
    return (
      <tr>
        <td>{this.props.courseCode}</td>
        <td>{this.props.courseTitle}</td>
        <td>{this.props.semesterTaken}</td>
        <td>{this.props.courseDescription}</td>
      </tr>
    );
  }
  
}

export default Class;