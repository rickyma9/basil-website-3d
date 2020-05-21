import React from 'react';
import Course from './Course'
import courses from './data/courses.json'
import './styles/Table.css';

interface Props {
  headings: Array<String>,
  // body: classes;
}

function Table(props: Props) {
  const createHeader = () => {
    var headers = [];
    for (var i = 0; i < props.headings.length; i++) {
      headers.push(<th>{props.headings[i]}</th>);
    }
    return <thead>{headers}</thead>;
  }

  const createBody = () => {
    var body = [];
    // for (var i = 0; i < props.body.length; i++) {
    //   if (props.body.type === Course) {  // change later
    //     body.push(<Course 
    //       courseCode={props.body[i].courseCode} 
    //       courseTitle={props.body[i].courseTitle}
    //       semesterTaken={props.body[i].semesterTaken}
    //       courseDescription={props.body[i].courseDescription} />)
    //   }
    // }
    for (var course in courses) {
      var c = course.toString();
      body.push(
        <tr>
          <td>{courses[15112].courseCode}</td>
          <td>{courses[15112].courseTitle}</td>
          <td>{courses[15112].semesterTaken}</td>
          <td>{courses[15112].courseDesription}</td>
        </tr>
      )
    }
    return <tbody>{body}</tbody>;
    // console.log(courses);
    // return <p>{courses[15112].courseName}</p>;
  }

  return (
    <table>
      {createHeader()}
      {createBody()}
    </table>
  );
}

export default Table;