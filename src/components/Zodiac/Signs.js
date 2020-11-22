import React, { Component } from 'react'
import signInfo from '../../data/horoscope2.json'
import Sign from './Sign'
import './Signs.css'
import { Link } from 'react-router-dom'

class Signs extends Component {
  constructor() {
    super()

    this.state = {
      signInfo
    }
  }

  render() {
    return (
      <div className='zodiacMap'>
        {this.state.signInfo.map((sign, id) =>
          <div key={id}>
            <Link  to={`/horoscope/${sign.title}`}>
            <Sign sign={sign} />

            </Link>
          </div>
        )}
      </div >

    )
  }
}

export default Signs