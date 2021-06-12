import React, { Component } from "react";
import axios from "axios";
import SunFacts from "../SunFacts/SunFacts";
import { Link } from "react-router-dom";
import "./ThreeDayScope.css";
import { Row, Col, Button } from "react-materialize";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { Twitter, Facebook, Linkedin } from "react-social-sharing";
import Aquarius from "./images/aquarius.png";
import Aries from "./images/aries.png";
import Cancer from "./images/cancer.png";
import Capricorn from "./images/capricorn.png";
import Leo from "./images/leo.png";
import Libra from "./images/libra.png";
import Pisces from "./images/pisces.png";
import Sagittarius from "./images/sagittarius.png";
import Taurus from "./images/taurus.png";
import Virgo from "./images/virgo.png";
import Gemini from "./images/gemini.png";
import Scorpio from "./images/scorpio.png";
//import MetaTags from 'react-meta-tags';
import { ReactTitle } from "react-meta-tags";

// import Loading from '../Loading/loading.gif'
class ThreeDayScope extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dateRange: "",
      currentDate: "",
      description: "",
      compatibility: "",
      mood: "",
      color: "",
      luckyNumber: "",
      luckyTime: "",
      sign: "",
      day: "Today",
    };
  }

  clickYesterday() {
    this.setState({ day: "Yesterday" }, this.componentDidMount);
  }
  clickToday() {
    this.setState({ day: "Today" }, this.componentDidMount);
  }

  clickTmrw() {
    this.setState({ day: "Tomorrow" }, this.componentDidMount);
  }

  componentDidMount = async () => {
    const signId = this.props.match.params.signId;
    let signEmoji = "";
    let signImage = "";
    if (signId === "Virgo") {
      signImage = Virgo;
      signEmoji = "♍";
    } else if (signId === "Aries") {
      signImage = Aries;
      signEmoji = "♈";
    } else if (signId === "Leo") {
      signImage = Leo;
      signEmoji = "♌";
    } else if (signId === "Cancer") {
      signImage = Cancer;
      signEmoji = "♋ ";
    } else if (signId === "Gemini") {
      signImage = Gemini;
      signEmoji = "♊";
    } else if (signId === "Taurus") {
      signImage = Taurus;
      signEmoji = "♉";
    } else if (signId === "Libra") {
      signImage = Libra;
      signEmoji = "♎";
    } else if (signId === "Scorpio") {
      signImage = Scorpio;
      signEmoji = "♏";
    } else if (signId === "Aquarius") {
      signImage = Aquarius;
      signEmoji = "♒";
    } else if (signId === "Capricorn") {
      signImage = Capricorn;
      signEmoji = "♑ ";
    } else if (signId === "Sagittarius") {
      signImage = Sagittarius;
      signEmoji = "♐";
    } else {
      signImage = Pisces;
      signEmoji = "♓";
    }
    console.log(signEmoji);

    const response = await axios.post(
      `https://aztro.sameerkumar.website/?sign=${signId}&day=${this.state.day}`
    );
    this.setState({
      dateRange: response.data["date_range"],
      currentDate: response.data["current_date"],
      description: response.data.description,
      sign: signId,
      compatibility: response.data.compatibility,
      mood: response.data.mood,
      color: response.data.color,
      luckyNumber: response.data["lucky_number"],
      luckyTime: response.data["lucky_time"],
      image: signImage,
      signEm: signEmoji,
    });
    // let data;
    // if (response.data.loading) {
    //   data = <img src={ Loading} />
    // }
  };

  render() {
    return (
      <div className="scope">
        <ReactTitle title={this.state.sign + this.state.signEm} />

        <h1 className="title-hdr">Zodiaks</h1>
        <Row>
          <Col className=" white-text" s={6}>
            <div className="threeScopes">
              <h1 className="zodiac-hdr">{this.state.sign}</h1>
              <img src={this.state.image} alt="scope " className="scopeimg" />

              <span>
                <h1 id="dateRange">({this.state.dateRange})</h1>
                <h3>
                  {this.state.day} - {this.state.currentDate}
                </h3>
                <p>{this.state.description}</p>
              </span>

              <div className="threeButtons">
                <Button
                  onClick={() => this.clickYesterday()}
                  node="button"
                  className="daybtn"
                >
                  <label>Yesterday</label>
                  <br></br>
                  <FaAngleDoubleLeft size={30} />
                </Button>
                <Button
                  onClick={() => this.clickToday()}
                  node="button"
                  className="daybtn"
                >
                  Today
                </Button>
                <Button
                  onClick={() => this.clickTmrw()}
                  node="button"
                  className="daybtn"
                >
                  <label>Tomorrow</label>
                  <br></br>
                  <FaAngleDoubleRight size={30} />
                </Button>
              </div>
              <div className="shareDiv">
                <label>Share</label>
                <Twitter
                  link={
                    "https://zodiacs.netlify.app/horoscope/" + this.state.sign
                  }
                />
                <Facebook
                  link={
                    "https://zodiacs.netlify.app/horoscope/" + this.state.sign
                  }
                />
                <Linkedin
                  link={
                    "https://zodiacs.netlify.app/horoscope/" + this.state.sign
                  }
                />
              </div>
            </div>
          </Col>

          <Col className="sun" s={6}>
            <SunFacts {...this.state} />
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#C4DDE9",
                alignSelf: "center",
              }}
            >
              <Button
                node="button"
                className="waves-effect waves-light"
                id="btn"
              >
                Pick another sign
              </Button>
            </Link>
          </Col>
        </Row>

        <Row>
          <Col className="sun2" s={6}>
            <SunFacts {...this.state} />
          </Col>
        </Row>
        <Row>
          <Col className="sun2" s={2}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#C4DDE9",
                alignSelf: "center",
              }}
            >
              <Button
                node="button"
                className="waves-effect waves-light"
                id="btn2"
               
              >
                Pick another sign
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ThreeDayScope;
