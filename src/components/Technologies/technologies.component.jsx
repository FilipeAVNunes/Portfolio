import React from "react";
import "./technologies.styles.scss";

function Technologies() {
  return (
    <div className="tech">
      <h1>Tech Stack</h1>
      <div className="tech-container">
        <div className="tech-column">
          <h4>FRONT END</h4>
          <ul>
            <li>React.Js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="tech-column">
          <h4>BACK END</h4>
          <ul>
            <li>Node.Js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RestAPI</li>
          </ul>
        </div>
        <div className="tech-column">
          <h4>TOOLS</h4>
          <ul>
            <li>NPM</li>
            <li>Git</li>
            <li>Github</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>

      {/*
      <p>React.js</p>
      <p>HTML</p>
      <p>CSS</p>
      <p>Javascript</p>
      <p>Node.js</p>
      <p>Express.js</p>
      <p>MongoDB</p>
      <p>Bootstrap</p>*/}
    </div>
  );
}

export default Technologies;
