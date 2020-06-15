import React from 'react';
import './style.css';

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div id="projects-content" className=" container-fluid">
        <div className="row">
          <div className="column">
            <a href="https://footheads.herokuapp.com/">
              <img src="images/footheads.png" alt="footheads" className="img-fluid" />
            </a>
          </div>
          <div className="column">
            <a href="https://equality-collective.netlify.com/">
              <img
                src="images/equality-collective.png"
                alt="equality collective"
                className="img-fluid"
              />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <a href="https://fullstack-froject2-ironhack.herokuapp.com/">
              <img src="images/4lolz.png" alt="4lolz" className="img-fluid" />
            </a>
          </div>
          <div className="column">
            <a href="https://kobeeebyfilipenunes.netlify.com/">
              <img src="images/kobeee.png" alt="kobeee" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
