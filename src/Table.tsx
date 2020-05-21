import React from 'react';
import Course from './Course'
import Project from './Project'
import courses from './data/courses.json'
import projects from './data/projects.json'
import './styles/Table.css';

interface Props {
  headings: Array<String>,
  body: String;
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
    if (props.body === "Courses") {
      for (var i = 0; i < courses["data"].length; i++) {
        body.push(
          <Course 
            courseCode={courses["data"][i].courseCode}
            courseTitle={courses["data"][i].courseTitle}
            semesterTaken={courses["data"][i].semesterTaken}
            courseDescription={courses["data"][i].courseDesription}
          />
        )
      }
    } else {
      for (var i = 0; i < projects["data"].length; i++) {
        body.push(
          <Project 
            event={projects["data"][i].event}
            projectTitle={projects["data"][i].projectTitle}
            projectDescription={projects["data"][i].projectDescription}
          />
        )
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

export default Table;