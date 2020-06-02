import React from 'react';
import './style.css';

function Footer() {
  return (
    <div>
      <footer>
        <div>
          <small>Developed by Filipe Nunes</small>
        </div>
        <span>
          <a href="https://linkedin.com/in/filipeavnunes/">
            <img src="images/LinkedIn.png" alt="LinkedIn" />
          </a>
          <a href="https://github.com/FilipeAVNunes">
            <img src="images/GitHub.png" alt="Github" />
          </a>
        </span>
      </footer>
    </div>
  );
}

export default Footer;
