import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="about">
      <div className="image" data-aos="fade-up"></div>
      <div className="desc" data-aos="fade-down">
        <h1>About me</h1>
        <div className="abouttxt">
          Hi! My name is Filipe Nunes and I'm a Junior Full-Stack Web Developer.
          I used to be a Salesman, but since I have a passion for learning, I
          took the risk, quitted of being a Salesman and embarked in a
          Full-Stack Web Development Bootcamp by Ironhack Lisbon. It fed my
          desire of learning more and lit up even more the passion that I've had
          for the area. It proved to be a very fruitful experience where I
          worked on 4 different projects with people from different countries
          and where I learned a whole lot of languages and frameworks. Put up
          individual and group projects, that helped to put to practice what we
          learned in the bootcamp. With my determination, team spirit and can-do
          attitude, I successfully managed to finish the bootcamp ready to
          embark on some new challenges that the IT world has to offer and be a
          true asset!
        </div>
      </div>
    </div>
  );
};

export default About;
