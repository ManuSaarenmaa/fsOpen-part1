//Main app
const App = () => {
  //Header
  const course = 'Half Stack application development'

  //Define the parts and exercises
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name:'State of a component',
    exercises: 14
  }

  //renders the header, content and total
  return (
    <div>
      <Header course={course} />
      <Content parts={[part1, part2, part3]} />
      <Total part1={part1} part2={part2} part3={part3}/>
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
    <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  );
};

//export the app component as default export so it can be yoused in other files
export default App