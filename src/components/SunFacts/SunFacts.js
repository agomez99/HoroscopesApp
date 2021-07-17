import React from "react";
import "./SunFacts.css";
import "../ThreeDayScope/ThreeDayScope.css";
import { Row, Col } from "react-materialize";

const SunFacts = (props) => {
  if (props.color === "Peach") {
    // const fontsColor = "#FFE5B4";

    console.log("peach was the color");
  }

  // console.log(props)

  return (
    <div className="sunFacts">
      <h3>Today's Sun Facts</h3>
      <Row>
        <Col>
          <p>Color:</p>
          <p>Mood:</p>
          <p>Lucky Number: </p>
          <p>Lucky Time: </p>
          <p>Compatibility: </p>
        </Col>
        <Col>
        <div className="sunleft">
          <p>{props.color}</p>
          <p> {props.mood}</p>
          <p>{props.luckyNumber}</p>
          <p>{props.luckyTime}</p>
          <p>{props.compatibility}</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default SunFacts;
