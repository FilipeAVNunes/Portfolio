import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./technologies.styles.scss";

const Technologies = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="tech">
      <h1>Tech Stack</h1>
      <div className="tech-stack">
        <div
          className="tech-column"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h4>FRONT END</h4>
          <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div
          className="tech-column"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <h4>BACK END</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>RestAPI</li>
          </ul>
        </div>
        <div
          className="tech-column"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <h4>TOOLS</h4>
          <ul>
            <li>NPM</li>
            <li>Git</li>
            <li>Github</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
