import React from 'react';
import './style.css';

function Projects() {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div id="projects-content" className="wrapper container-fluid">
        <div className="card text-white box">
          <img src="images/footheads.png" alt="footheads" className="img-fluid" />
          <a href="https://footheads.herokuapp.com/">
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <div className="card-text border-0 bg-semitransparent text-center"></div>
            </div>
          </a>
        </div>
        <div className="card text-white box">
          <img
            src="images/equality-collective.png"
            alt="equality collective"
            className="img-fluid"
          />
          <a href="https://equality-collective.netlify.com/">
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <div className="card-text border-0 bg-semitransparent text-center"></div>
            </div>
          </a>
        </div>
        <div className="card text-white box verticalone">
          <img src="images/4lolz.png" alt="4lolz" className="img-fluid" />
          <a href="https://fullstack-froject2-ironhack.herokuapp.com/">
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <div className="card-text border-0 bg-semitransparent text-center"></div>
            </div>
          </a>
        </div>
        <div className="card text-white box">
          <img src="images/kobeee.png" alt="kobeee" className="img-fluid" />
          <a href="https://kobeeebyfilipenunes.netlify.com/">
            <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
              <div className="card-text border-0 bg-semitransparent text-center"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
