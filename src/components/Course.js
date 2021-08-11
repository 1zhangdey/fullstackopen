import React from "react";


const Course = ({ course }) => {
    return (
      <div>
        <Head course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    );
  };
  
  const Head = ({ course }) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    );
  };
  
  const Part = (props) => {
    return (
      <>
        {props.part.name} {props.part.exercises}
      </>
    );
  };
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (
          <li key={part.id}>
            <Part part={part} />
          </li>
        ))}
      </div>
    );
  };
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((total, part) => total + part.exercises, 0);
    return (<p>Total is {sum}</p>);
  };

  export default Course;