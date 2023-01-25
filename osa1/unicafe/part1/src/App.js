import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.text}
      </h1>
    </div>
  )
}

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const StatisticLine  = ({text, value}) => {
  return (
      <table>
        <tbody>
          <tr>
            <td width="50px">{text}</td>
            <td>{value}</td>
          </tr>
        </tbody>
      </table>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good * 1 + bad * -1) / all
  const positive = (good / all * 100) + "%"
  if (all > 0) {
    return (
      <div>
      <Header text="statistics"></Header>
      <StatisticLine  text="good" value={good}></StatisticLine >
      <StatisticLine  text="neutral" value={neutral}></StatisticLine >
      <StatisticLine  text="bad" value={bad}></StatisticLine >
      <StatisticLine  text="all" value={all}></StatisticLine >
      <StatisticLine  text="average" value={average}></StatisticLine >
      <StatisticLine  text="positive" value={positive}></StatisticLine >
    </div>
    )
  }
  return (
    <div>
        <Header text="statistics"></Header>
        No feedback given
    </div>
      
      
    )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <Header text="give feedback"></Header>
      <Button text="good" handleClick={increaseGood}></Button>
      <Button text="neutral" handleClick={increaseNeutral}></Button>
      <Button text="bad" handleClick={increaseBad}></Button>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App