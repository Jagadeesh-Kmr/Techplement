import {Link} from 'react-router-dom'

import {FaTwitter, FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'

import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-main-div">
      <div className="social-media-icon-about-div">
        <a
          className="visit-anchor"
          href=" https://www.linkedin.com/in/jagadeesh-kumar-553788213/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="social-media-icon-about" />
        </a>
        <a
          className="visit-anchor"
          href="https://github.com/Jagadeesh-Kmr"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="social-media-icon-about" />
        </a>
        <a
          className="visit-anchor"
          href="https://www.youtube.com/@Jagadeesh-ij5rt"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube className="social-media-icon-about" />
        </a>
        <a
          className="visit-anchor"
          href="https://x.com/TJagadeeshkmr"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter className="social-media-icon-about" />
        </a>
      </div>

      <div className="about-me-div">
        <h1 className="about-main-h1">
          {`HEY, I'AM  `}
          <span className="my-name">JAGADEESH</span>
        </h1>
        <p className="about-desc">
          Critical thinker with an instinct for design who plans to use these
          qualities in a front-end developer role that allows me to further
          develop my skills.
        </p>
        <div className="about-mobile-icon-div">
          <a
            className="visit-anchor"
            href=" https://www.linkedin.com/in/jagadeesh-kumar-553788213/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="social-media-icon" />
          </a>
          <a
            className="visit-anchor"
            href="https://github.com/Jagadeesh-Kmr"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="social-media-icon" />
          </a>
          <a
            className="visit-anchor"
            href="https://www.youtube.com/@Jagadeesh-ij5rt"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube className="social-media-icon" />
          </a>

          <a
            className="visit-anchor"
            href="https://x.com/TJagadeeshkmr"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter className="social-media-icon" />
          </a>
        </div>
        <Link to="/projects">
          <button type="button" className="about-btn">
            PROJECTS
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default About
