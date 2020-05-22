import * as React from 'react';
import '../styles/Project.css';

interface Props {
  event: String,
  projectTitle: String,
  projectDescription: String;
}

function Project(props: Props) {
  return (
    <tr>
      <td>{props.event}</td>
      <td>{props.projectTitle}</td>
      <td>{props.projectDescription}</td>
    </tr>
  );
}

export default Project;