import React, { Component } from 'react'
import axios from 'axios'
import SunFacts from '../SunFacts/SunFacts'
import { Link } from 'react-router-dom'
import './ThreeDayScope.css'
import 'materialize-css';
import {Row, Col, Button } from 'react-materialize';
class ThreeDayScope extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dateRange: '',
      currentDate: '',
      description: '',
      compatibility: '',
      mood: '',
      color: '',
      luckyNumber: '',
      luckyTime: '',
      sign: '',
      day: 'Today'
    }
  }

  clickYesterday() {
    this.setState({ 'day': 'Yesterday' }, this.componentDidMount)
  }
  clickToday() {
    this.setState({ 'day': 'Today' }, this.componentDidMount)
  }

  clickTmrw() {
    this.setState({ 'day': 'Tomorrow' }, this.componentDidMount)
  }

  componentDidMount = async () => {
    const signId = this.props.match.params.signId

    const response = await axios.post(`https://aztro.sameerkumar.website/?sign=${signId}&day=${this.state.day}`)

    this.setState({
      dateRange: response.data['date_range'],
      currentDate: response.data['current_date'],
      description: response.data.description,
      sign: signId,
      compatibility: response.data.compatibility,
      mood: response.data.mood,
      color: response.data.color,
      luckyNumber: response.data['lucky_number'],
      luckyTime: response.data['lucky_time']
    }
    )
  }

  render() {
    return (
<div className="scope">
        <Row>
          <Col
            className=" white-text"
            s={1}>
        <h1 className="zodiac">{this.state.sign}</h1>
        <h4 id='dateRange'>({this.state.dateRange})</h4>
        <div className='threeScopes'>
          <h3>{this.state.day} - {this.state.currentDate}</h3>
          <p>{this.state.description}</p>
        </div>
        <span className='threeButtons'>
          <Button onClick={() => this.clickYesterday()} 
          waves='light'
          style={{ backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center' }} >Yesterday</Button>
          <Button onClick={() => this.clickToday()}
            waves='light'
          style={{ backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center' }}>Today</Button>
          <Button onClick={() => this.clickTmrw()}
            waves='light'
          style={{ backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center' }}>Tomorrow</Button>
            </span>
           

          </Col>
          <Col
            className="sun"
            s={1}><SunFacts {...this.state} />
             <Link to='/' style={{ textDecoration: 'none', color: '#C4DDE9', gridRowStart: '4', gridColumnStart: '7', alignSelf: 'center' }}>
              <Button className="pick-btn" node="button"
                waves='light'
                style={{ backgroundColor: 'purple', color:'white', border: 'solid 1px #C4DDE9', padding: '25px', textAlign: 'center', marginLeft:'38%',marginrIGHT:'33.3%'}}>Pick another sign</Button>
            </Link>

          </Col>

          </Row>
</div>

    )
  }
}

export default ThreeDayScope
