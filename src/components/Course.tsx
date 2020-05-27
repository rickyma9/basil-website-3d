import * as React from 'react';
import '../styles/Course.css';
import { prependOnceListener } from 'cluster';
import { prototype } from 'events';

interface Props {
  courseCode: String,
  courseTitle: String,
  semesterTaken: String,
  courseDescription: String;
  active: boolean;
}

function Course(props: Props) {
  if (props.active) {
    return (
      <tr className="dark">
        <td className="wider centered">{props.courseCode}</td>
        <td className="centered">{props.courseTitle}</td>
        <td className="centered">{props.semesterTaken}</td>
        <td>{props.courseDescription}</td>
      </tr>
    );
  }
  return (
    <tr className="light">
      <td className="wider centered">{props.courseCode}</td>
      <td className="centered">{props.courseTitle}</td>
      <td className="centered">{props.semesterTaken}</td>
      <td>{props.courseDescription}</td>
    </tr>
  );
}

export default Course;

// class Class extends React.Component<React.Props<String, String, String, String>> {
//   render () {
//     return (
//       <tr>
//         <td>{this.props.courseCode}</td>
//         <td>{this.props.courseTitle}</td>
//         <td>{this.props.semesterTaken}</td>
//         <td>{this.props.courseDescription}</td>
//       </tr>
//     );
//   }
  
// }

// export default Class;