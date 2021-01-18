import React, { Component } from 'react'
import axios from 'axios'
import SunFacts from '../SunFacts/SunFacts'
import { Link } from 'react-router-dom'
import './ThreeDayScope.css'
import { Row, Col, Button } from 'react-materialize';
// import { FacebookShareButton, FacebookIcon } from "react-share";
// import { TwitterShareButton, TwitterIcon } from "react-share";
// import { LinkedinShareButton, LinkedinIcon } from "react-share";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { Twitter, Facebook, Linkedin, } from 'react-social-sharing'



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
      day: 'Today',
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
    const signId = this.props.match.params.signId;
    let signImage = ""
    if (signId === "Virgo")
      signImage = "https://i.ibb.co/gjMb2Fd/8a.png";
    if (signId === "Aries")
      signImage = "https://i.ibb.co/Df7N39V/3a.png";
    if (signId === "Leo")
      signImage = "https://i.ibb.co/NZfwf7x/7a.png";
    if (signId === "Cancer")
      signImage = "https://i.ibb.co/k8RsJZH/6.png";
    if (signId === "Gemini")
      signImage = "https://i.ibb.co/fGKWqk2/5a.png";
    if (signId === "Taurus")
      signImage = "https://i.ibb.co/jzcS8zb/4a.png";
    if (signId === "Libra")
      signImage = "https://i.ibb.co/844m9DW/9a.png";
    if (signId === "Scorpio")
      signImage = "https://i.ibb.co/2s7Br7s/11a.png";
    if (signId === "Aquarius")
      signImage = "https://i.ibb.co/R4VBwPp/1a.png";
    if (signId === "Capricorn")
      signImage = "https://i.ibb.co/wr8XZjQ/10a.png";
    if (signId === "Sagittarius")
      signImage = "https://i.ibb.co/gRztRrZ/12a.png";
    if (signId === "Pisces")
      signImage = "https://i.ibb.co/rQb81zn/2a.png";
    console.log(signImage);

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
      luckyTime: response.data['lucky_time'],
      image: signImage
    }
    )
    // let data;
    // if (response.data.loading) {
    //   data = <img src={ require('../../components/Loading/Loading')} />
    // }
  }

  render() {

    return (
      
      <div className="scope">
        <h1 className="title-hdr">Zodiaks</h1>
        <Row>
          <Col className=" white-text" s={6}>
            <div className='threeScopes' >
            <h1 className="zodiac-hdr">{this.state.sign}</h1>
            <span >

            <h1 id='dateRange'>({this.state.dateRange})</h1>
              <h3>{this.state.day} - {this.state.currentDate}</h3>
                <img src={this.state.image} alt="scope " className="scopeimg" />
                <p>{this.state.description}</p>
              </span>

              <div className='threeButtons'>
              {/* <div className="tooltip">Hover over me
                <span className="tooltiptext">Todays Horoscope</span>
              </div> */}
                <Button onClick={() => this.clickYesterday()}
                  node="button" className="waves-effect waves-purple"
                  style={{ marginRight: '10px', backgroundColor: 'black', color: 'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center', paddingBottom: '30px' }} ><FaAngleDoubleLeft size={30} /></Button>
                <Button onClick={() => this.clickToday()}
                  node="button" className="waves-effect waves-purple"
                  style={{ marginRight: '10px', backgroundColor: 'black', color: 'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center', paddingBottom: '30px'}}>Today</Button>
                <Button onClick={() => this.clickTmrw()}
                  node="button" className="waves-effect waves-purple"
                  style={{ backgroundColor: 'black', color: 'yellow', border: 'solid 1px #C4DDE9', padding: '20px', textAlign: 'center', paddingBottom: '30px' }}><FaAngleDoubleRight size={30} /></Button>
              </div>
              <div className="shareDiv">
              <label>Share</label>
              <Twitter link={"https://zodiacs.netlify.app/horoscope/" + this.state.sign} />   
              <Facebook  link={"https://zodiacs.netlify.app/horoscope/" + this.state.sign} /> 
              <Linkedin  link={"https://zodiacs.netlify.app/horoscope/" + this.state.sign} />              
             
            </div>
            </div>
          </Col>



          <Col className="sun" s={6}>
            <SunFacts {...this.state} />
            <Link to='/' style={{ textDecoration: 'none', color: '#C4DDE9', alignSelf: 'center' }}>
              <Button
                node="button" className="waves-effect waves-light" id="btn"
                style={{ backgroundColor: 'purple', color: 'yellow', border: 'solid 1px #C4DDE9', margin: 'auto', paddingBottom: '50px', paddingTop: '20px', display: 'flex' }}>Pick another sign</Button>
            </Link>
          </Col>

        </Row>


        <Row>
          <Col className="sun2" s={2}>
            <SunFacts {...this.state} />
            <Link to='/' style={{ textDecoration: 'none', color: '#C4DDE9', alignSelf: 'center' }}>
              <Button
                node="button" className="waves-effect waves-light" id="btn2"
                style={{ backgroundColor: 'purple', color: 'yellow', border: 'solid 1px #C4DDE9', margin: 'auto', paddingBottom: '60px', paddingTop: '10px' }}>Pick another sign</Button>
            </Link>


          </Col>
        </Row>


      </div>

    )
  }
}

export default ThreeDayScope
