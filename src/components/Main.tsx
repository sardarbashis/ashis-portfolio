import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileImg from "../assets/ashis.jpeg";

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImg} alt="Ashis Kumar Sardar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/sardarbashis" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashiskumarsardar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ashis Kumar Sardar</h1>
          <p>ML Engineer | GenAI Builder | Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/sardarbashis" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/ashiskumarsardar/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;