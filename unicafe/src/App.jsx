import { useState } from 'react'

// Component to display statistics
const Statistics = ({ good, neutral, bad, all }) => {
  // Function to calculate the average score
  const calculateAverage = () => {
    if (all === 0) return 0
    return (good * 1 + neutral * 0 + bad * -1) / all;
  }
  
 
  const calcilatePositive = () => {
    if (all === 0) return 0
    return (good / all) * 100
  }

  // Component to display a single statistic line
  const StatisticLine = ({text, value}) => {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    )
  }
  
  // If no feedback is given, display a message
  if (all === 0) {
    return <p>No feedback given</p>
  }

  // Render the statistics table
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} /> 
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={calculateAverage()} />
          <StatisticLine text="positive" value={`${calcilatePositive()} %`} />
        </tbody>
      </table>
    </div>
  )
}


const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>


const App = () => {
  // State variables to track feedback counts
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, SetAll] = useState(0)

  // Handlers to update state for each feedback type
  const addGood = () => {
    SetAll(all + 1)
    setGood(good + 1)
  }

  const addNeutral = () => {
    SetAll(all + 1)
    setNeutral(neutral + 1)
  }

  const addBad = () => {
    SetAll(all + 1)
    setBad(bad + 1)
  }

  
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={addGood} text='good' />
      <Button onClick={addNeutral} text='neutral' />
      <Button onClick={addBad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
