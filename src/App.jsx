//Main app
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }
  
    //renders the header, content and total
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course}/>
      </div>
    )
  }

//Header component
const Header = (course) => {

  return (
    <h1>{course.course.name}</h1>
  )
}

//part component to display the name and exercise in one part
const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  );
};

//content component renders all parts using the part component
const Content =({course}) => {
// Render each part by accessing the parts array and passing the data to the part component
  return(
    <div> 
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises} />
    </div>
  );
};

//total component calculates and displays total number of exercises
const Total = (props) => {

  return(
    <p>Number of exercises {props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises}</p>
  );
};

//export the app component as default export so it can be yoused in other files
export default App