import React from "react";
import "./technologies.styles.css";

function Technologies() {
  return (
    <div className="tech">
      <h1>Some Technologies I've worked with</h1>
      <ul>
        <li>React.js</li>
        <img className="logo" src="images/ReactJS.png" alt="react icon" />
        <li>HTML</li>
        <img className="logo" src="images/HTML5.png" alt="html icon" />
        <li>CSS</li>
        <img className="logo" src="images/CSS3.png" alt="css icon" />
        <li>Javascript</li>
        <img
          className="logo"
          src="images/javascript.jpg"
          alt="javascript icon"
        />
        <li>Node.js</li>
        <img className="logo" src="images/nodeJS.jpg" alt="nodejs icon" />
        <li>Express.js</li>
        <img
          className="logo"
          src="images/node-express.png"
          alt="expressjs icon"
        />
        <li>MongoDB</li>
        <img className="logo" src="images/mongoDB.png" alt="mongodb icon" />
        <li>Bootstrap</li>
        <img className="logo" src="images/bootstrap.jpg" alt="bootstrap icon" />
      </ul>
    </div>
  );
}

export default Technologies;
