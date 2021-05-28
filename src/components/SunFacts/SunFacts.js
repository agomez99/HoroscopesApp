import React from 'react'
import './SunFacts.css'
import '../ThreeDayScope/ThreeDayScope.css'

const SunFacts = (props) => {
  if(props.color === "Peach"){
    // const fontsColor = "#FFE5B4";

    console.log("peach was the color")
  }

  // console.log(props)

  return (
    <div className='sunFacts'>
      <h3>Sun Facts</h3>
      <p style={{color:"{props.color}"}}>Color: {props.color}</p>
      <p>Mood: {props.mood}</p>
      <p>Lucky Number: {props.luckyNumber}</p>
      <p>Lucky Time: {props.luckyTime}</p>
      <p>Compatibility: {props.compatibility}</p>
    </div>
  )
}

export default SunFacts
