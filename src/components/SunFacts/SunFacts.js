import React from "react";
import "./SunFacts.css";
import "../ThreeDayScope/ThreeDayScope.css";
import { Row, Col } from "react-materialize";


const SunFacts = (props) => {

  const fontColor = (props.color) ? props.color : "white";
  const lower = fontColor.toLowerCase();

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
          <p style={{color:lower}}>{props.color}</p>
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
