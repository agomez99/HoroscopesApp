import React from 'react'
import './SunFacts.css'
import '../ThreeDayScope/ThreeDayScope.css'

const SunFacts = (props) => {

  if(props.color === "Yellow"){
    console.log("yellow was the color")
    // const fontColor = "red";
  }
  return (
    <div className='sunFacts'>
      <h3>Sun Facts</h3>
      <p >Color: {props.color}</p>
      <p>Mood: {props.mood}</p>
      <p>Lucky Number: {props.luckyNumber}</p>
      <p>Lucky Time: {props.luckyTime}</p>
      <p>Compatibility: {props.compatibility}</p>
    </div>
  )
}

export default SunFacts
