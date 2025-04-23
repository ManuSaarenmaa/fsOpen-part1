import { useState } from 'react'

const Statistics = ({ good, neutral, bad, all }) => {
  const calculateAverage = () => {
    if (all === 0) return 0
    return (good * 1 + neutral * 0 + bad * -1) / all;
  }
  
  const calcilatePositive = () => {
    if (all === 0) return 0
    return (good / all) * 100
  }

  if (all === 0) {
    return <p>No feedback given</p>
  }

  return (
    <div>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {calculateAverage()}</p>
      <p>positive {calcilatePositive()} %</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, SetAll] = useState(0)

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
      <button onClick={addGood}>good</button>
      <button onClick={addNeutral}>neutral</button>
      <button onClick={addBad}>bad</button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
