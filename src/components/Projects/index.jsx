import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './style.css';

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div id="projects-content" className=" container-fluid">
        <div className="row">
          <div className="column footheads" data-aos="fade-down-right">
            <a href="https://footheads.herokuapp.com/">
              <img src="images/footheads.png" alt="footheads" className="img-fluid" />
              <div className="centered-footheads">
                <p>
                  This is an app that allowsk you to predict scores and check what other users think
                  and also check scores, league tables and share comments and stories.
                </p>
              </div>
            </a>
          </div>
          <div className="column equality" data-aos="fade-down-left">
            <a href="https://equality-collective.netlify.com/">
              <img
                src="images/equality-collective.png"
                alt="equality collective"
                className="img-fluid"
              />
              <div className="centered-equality">
                <p>
                  The user can check how's the gender equality in different areas and companies.
                  Salaries, salaries per position, number of male and female workers, etc.
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="column lolz" data-aos="fade-up-right">
            <a href="https://fullstack-froject2-ironhack.herokuapp.com/">
              <img src="images/4lolz.png" alt="4lolz" className="img-fluid" />
              <div className="centered-lolz">
                <p>
                  The user can post pictures, upvote and comment different memes from other users.
                </p>
              </div>
            </a>
          </div>
          <div className="column kobeee" data-aos="fade-up-left">
            <a href="https://kobeeebyfilipenunes.netlify.com/">
              <img src="images/kobeee.png" alt="kobeee" className="img-fluid" />
              <div className="centered-kobeee">
                <p>
                  Basketball game, the user needs to press the SHOOT button in the interval to make
                  a basket. It speeds up with how many baskets the user makes.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
