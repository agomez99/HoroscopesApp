import React from 'react'

const Sign = (props) => {
  return (
    <div className='zodiacDiv'>
      <img className='zodiacImg' src={props.sign.image} alt={props.sign.title} />
      <h4 className='zodiacTitle'>{props.sign.title}</h4>
    </div>
  )
}

export default Sign