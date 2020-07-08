import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about">
      <div className="textabout">
        <div className="about-img" data-aos="fade-right">
          <img src="images/FilipeNunes.jpeg" alt="foto" className="foto" />
        </div>
        <div className="aboutxt" data-aos="fade-left">
          <h1>About</h1>
          <article>
            Hi! My name is Filipe Nunes and I'm a Junior Full-Stack Web Developer. I used to be a
            Salesman, but since I have a passion for learning, I took the risk, quitted of being a
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
        <li data-aos="fade-right">HTML5</li>
        <li data-aos="fade-left">CSS3</li>
        <li data-aos="fade-right">JavaScript ES6</li>
        <li data-aos="fade-left">React.js</li>
        <li data-aos="fade-right">Node.js</li>
        <li data-aos="fade-left">Express.js</li>
        <li data-aos="fade-right">MongoDB</li>
        <li data-aos="fade-left">Mongoose</li>
        <li data-aos="fade-right">Bootstrap</li>
        <li data-aos="fade-left">Github</li>
        <li data-aos="fade-right">Git</li>
      </ul>
    </div>
  );
};

export default About;
