import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

import "./projects-carousel.styles.scss";

const ProjectsCarousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="projectcarousel">
      <Carousel className="carousel" data-aos="fade-up">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/crwn-clothingdark.png"
            alt="First slide"
          />
          <Carousel.Caption data-aos="zoom-in-up" className="d-block mh-100">
            <Button
              className="check-out-more"
              variant="outline-light"
              href="https://crwn-clothing-byfilipenunes.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p>Simple E-commerce website with React.js.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/footheadsdark.png"
            alt="Third slide"
          />

          <Carousel.Caption className="d-block mh-100">
            <Button
              className="check-out-more"
              variant="outline-light"
              href="https://footheads.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p style={{ color: "white" }}>
              Football results, blog posts, leagues and score prediction from
              the users.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/4lolzdark.png"
            alt="Third slide"
          />

          <Carousel.Caption className="d-block mh-100">
            <Button
              className="check-out-more"
              variant="outline-light"
              href="https://fullstack-froject2-ironhack.herokuapp.com/"
            >
              Check out more!
            </Button>
            <p>A way to relax, with programming memes and funny pictures.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/kobeeedark.png"
            alt="Third slide"
          />

          <Carousel.Caption className="d-block mh-100">
            <Button
              className="check-out-more"
              variant="outline-light"
              href="https://kobeeebyfilipenunes.netlify.app/"
            >
              Check out more!
            </Button>
            <p>Basketball mini-game paying tribute to Kobe Bryant.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ProjectsCarousel;
