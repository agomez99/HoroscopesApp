import React, { Component } from 'react'
import axios from 'axios'
import SunFacts from '../SunFacts/SunFacts'
import { Link } from 'react-router-dom'
import './ThreeDayScope.css'
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
<h2 style={{textAlign:"center", zIndex:"0"}}>Zodiacs</h2>

        <Row>
          <Col className=" white-text"  s={6}>
        <h1 className="zodiac">{this.state.sign}</h1>
        <h4 id='dateRange'>({this.state.dateRange})</h4>
        <div className='threeScopes'>
          <h3>{this.state.day} - {this.state.currentDate}</h3>
          <p>{this.state.description}</p>
        </div>
          <div className='threeButtons'>
          <Button onClick={() => this.clickYesterday()} 
         node="button"  className="waves-effect waves-purple"
          style={{ marginRight:'10px',backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center',paddingBottom: '30px'}} >Yesterday</Button>
          <Button onClick={() => this.clickToday()}
         node="button" className="waves-effect waves-purple"               
          style={{marginRight:'10px', backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center',paddingBottom: '30px' }}>Today</Button>
          <Button onClick={() => this.clickTmrw()}
          node="button" className="waves-effect waves-purple"               
          style={{ backgroundColor: 'black', color:'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center',paddingBottom: '30px'}}>Tomorrow</Button>
           </div>

          </Col>
          <Col className="sun" s={2}>
          <SunFacts {...this.state}  />
            <Link to='/' style={{ textDecoration: 'none', color: '#C4DDE9', alignSelf: 'center' }}>
            <Button
            node="button" className="waves-effect waves-light" id="btn"         
              style={{ backgroundColor: 'purple', color: 'yellow', border: 'solid 1px #C4DDE9', margin:'auto',paddingBottom: '50px', paddingTop:'20px', display:'flex'}}>Pick another sign</Button>
            </Link>

          </Col>
          </Row>

        <Row>
        <Col className="sun2" s={2}>

        <SunFacts {...this.state}  />
            <Link to='/' style={{ textDecoration: 'none', color: '#C4DDE9', alignSelf: 'center' }}>
            <Button
            node="button" className="waves-effect waves-light" id="btn2"         
              style={{ backgroundColor: 'purple', color: 'yellow', border: 'solid 1px #C4DDE9', margin:'auto',paddingBottom: '60px', paddingTop:'10px'}}>Pick another sign</Button>
            </Link>

        </Col>

        </Row>


</div>

    )
  }
}

export default ThreeDayScope
