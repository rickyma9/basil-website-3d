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
    for (var i = 0; i < courses["data"].length; i++) {
      body.push(
        <tr>
          <td>{courses["data"][i].courseCode}</td>
          <td>{courses["data"][i].courseTitle}</td>
          <td>{courses["data"][i].semesterTaken}</td>
          <td>{courses["data"][i].courseDesription}</td>
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