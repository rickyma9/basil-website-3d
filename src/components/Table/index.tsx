import React from 'react';

// importing components
import Header from "../SimpleHeader/"
import Course from '../Course'
import Project from '../Project'
import courses from '../../data/courses.json'
import projects from '../../data/projects.json'
import './styles.css';

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
        if (i % 2 === 0) {
          body.push(
            <Course 
              courseCode={courses["data"][i].courseCode}
              courseTitle={courses["data"][i].courseTitle}
              semesterTaken={courses["data"][i].semesterTaken}
              courseDescription={courses["data"][i].courseDesription}
              active={true}
            />
          )
        } else {
          body.push(
            <Course 
              courseCode={courses["data"][i].courseCode}
              courseTitle={courses["data"][i].courseTitle}
              semesterTaken={courses["data"][i].semesterTaken}
              courseDescription={courses["data"][i].courseDesription}
              active={false}
            />
          )
        }
        
      }
    } else {
      for (var i = 0; i < projects["data"].length; i++) {
        body.push(
          <Project 
            event={projects["data"][i].event}
            projectTitle={projects["data"][i].projectTitle}
            projectDescription={projects["data"][i].projectDescription}
            active={true}
          />
        )
      }
    }
    return <tbody>{body}</tbody>;
  }

  return (
    <div className="table">
    <Header />
    <table>
      {createHeader()}
      {createBody()}
    </table>
    </div>
  );
}

export default Table;