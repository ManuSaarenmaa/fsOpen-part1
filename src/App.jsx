//Main app
const App = () => {
  //Header
  const course = 'Half Stack application development'

  //Define the parts and exercises
  const parts = [
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

    //renders the header, content and total
    return (
      <div>
        <Header course={course} />
        <Content parts={parts} />
        <Total parts={parts}/>
      </div>
    )
  }

//Header component
const Header = (props) => {

  return (
    <h1>{props.course}</h1>
  )
}

//part component to display the name and exercise in one part
const Part = ({ name, exercises }) => {
  return (
    <p>{name} {exercises}</p>
  );
};

//content component renders all parts using the part component
const Content =({parts}) => {
// Render each part by accessing the parts array and passing the data to the part component
  return(
    <div> 
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  );
};

//total component calculates and displays total number of exercises
const Total = (props) => {

  return(
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  );
};

//export the app component as default export so it can be yoused in other files
export default App