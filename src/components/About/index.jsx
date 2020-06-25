import React from 'react';
import './style.css';

function About() {
  return (
    <div id="about">
      <div className="textabout">
        <div className="about-img">
          <img src="images/FilipeNunes.jpeg" alt="foto" className="foto" />
        </div>
        <div className="aboutxt">
          <h1>About</h1>
          <article>
            Hi! My name is Filipe Nunes and I'm a Junior Full-Stack Web Developer. I used to be a
            Salesman, but I have a passion for learning, so I took the risk, quitted of being a
            Salesman and embarked in a Full-Stack Web Development Bootcamp by Ironhack Lisbon. It
            fed my desire of learning more and lit up even more the passion that I've had for the
            area. It proved to be a very fruitful experience where I worked on 4 different projects
            with people from different countries and where I learned a whole lot of languages and
            frameworks.
          </article>
        </div>
      </div>
      <h3>Some technologies I've worked with</h3>
      <ul>
        <li>HTML5</li>
        <li>CSS3</li>
        <li>JavaScript ES6</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>Mongoose</li>
        <li>Bootstrap</li>
        <li>Github</li>
        <li>Git</li>
      </ul>
    </div>
  );
}

export default About;
