import {FaTwitter, FaLinkedin, FaGithub, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <>
    <div className="footer-main-div">
      <div>
        <p className="home-p footer">
          Learn<span style={{color: '#0f1635'}}>HUB</span>
        </p>
        <p className="footer-cp">We Take Learning To New Heights</p>
      </div>

      <div className="footer-contact-div">
        <h1>Contact</h1>
        <p>2/84 Old Malakpet Hyderabad</p>
        <p>040-23428388</p>
      </div>

      <div className="social-media-icon-div">
        <h1 className="footer-social-h1">Get In Touch</h1>
        <div className="social-icon-div">
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
      </div>
    </div>
  </>
)

export default Footer
