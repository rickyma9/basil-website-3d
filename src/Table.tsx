import React from 'react';
import Class from './Class'
import './styles/Table.css';

function Table(props) {
  const createHeader = () => {
    var headers = [];
    for (var i = 0; i < props.headings.length; i++) {
      headers.push(props.headings[i]);
    }
    return <thead>{headers}</thead>;
  }

  const createBody = () => {
    var body = [];
    for (var i = 0; i < props.body.length; i++) {
      if (props.body[i].type === Class) {  // change later
        body.push(<Class 
          courseNumber={props.body[i].courseNumber} 
          courseName={props.body[i].courseName}
          semesterTaken={props.body[i].semesterTaken}
          courseDescription={props.body[i].courseDescription} />)
      }
    }
    return <tbody>{body}</tbody>;
  }

  return (
    <table>
      {createHeader()}
      {createBody()}
    </table>
  );
}