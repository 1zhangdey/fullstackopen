import React, { useState } from 'react'


const Button = ({action,text}) =>{
  return(
    <>
      <button onClick = {action}> 
        {text}
      </button>
    </>
  )
}
const Stats = ({total,good,neutral,bad,Avg,totalPositive}) => {
  if (total === 0){
    return(
      <div>
        No Feedback Given
      </div>
      )
  }
  return(
    <div>
    <ul>
    <li>
    Total: {total}
    </li>
    <li>
      Good: {good}
    </li>
    <li>
      Neutral: {neutral}
    </li>
    <li>
      Bad: {bad}
    </li>
    <li>
      Avg: {Avg}
    </li>
    <li>
      Percent Postive: {totalPositive} %
    </li>
  </ul>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0)
  var Avg = average/total;
  var totalPositive = parseFloat(good/total);

  const clickSetGood = () => {
    setGood(good +1);
    setTotal(total +1);
    setAverage(average+1)
  }
  const clickSetNeutral = () => {
    setNeutral(neutral +1);
    setTotal(total +1);
  }
  const clickSetBad = () =>{
    setBad(bad +1);
    setTotal(total +1);
    setAverage(average-1)
  }

  return (
    <div>
      <h1>Give Feedback!</h1>
      <div>
      <Button action = {clickSetGood} text = "Good"/>
      <Button action = {clickSetNeutral} text = "Neutral"/>
      <Button action = {clickSetBad} text = "Bad"/>
      </div>
      <h1>
        Total Count!
      </h1>
      <Stats total = {total} good = {good} bad = {bad} neutral = {neutral} Avg = {Avg} totalPositive = {totalPositive}/>
      
    </div>
  )
}


export default App