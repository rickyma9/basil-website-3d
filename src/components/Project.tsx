import * as React from 'react';
import '../styles/Project.css';

interface Props {
  event: String,
  projectTitle: String,
  projectDescription: String;
  active: boolean;
}

function Project(props: Props) {
  if (props.active) {
    return (
      <tr className="dark">
        <td className="centered">{props.event}</td>
        <td className="centered wider">{props.projectTitle}</td>
        <td>{props.projectDescription}</td>
      </tr>
    );
  }
  return (
    <tr className="light">
      <td className="centered">{props.event}</td>
      <td className="centered wider">{props.projectTitle}</td>
      <td>{props.projectDescription}</td>
    </tr>
  );
}

export default Project;