import {Link} from 'react-router-dom'

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaDatabase,
  FaLink,
} from 'react-icons/fa'

import Header from '../Header'
import './index.css'

const Skills = () => (
  <>
    <div className="skills-header-div">
      <Header />
    </div>
    <div className="skills-bg-div">
      <p className="skills-main-p">
        Skills I have learned from <br />
      </p>
      <a
        href="https://www.linkedin.com/school/nxtwavetech/posts/?feedView=all"
        target="_blank"
        rel="noreferrer"
        className="skills-link-element"
      >
        <p className="nxtwave-p">NXTWave</p>
      </a>

      <div className="skills-img-div">
        <div className="skills-div">
          <FaHtml5 className="skills-img" style={{color: '#ee5c19'}} />
          <a
            href="https://certificates.ccbp.in/intensive/static-website?id=RAYZJWYXFI"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              HTML
            </p>
          </a>
        </div>

        <div className="skills-div">
          <FaCss3Alt className="skills-img" style={{color: '#429cf0'}} />
          <a
            href="https://certificates.ccbp.in/intensive/flexbox?id=AVHZBTINCQ"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              CSS
            </p>
          </a>
        </div>

        <div className="skills-div">
          <FaJs className="skills-img" style={{color: '#dfcb16'}} />
          <a
            href="https://certificates.ccbp.in/intensive/javascript-essentials?id=MWLXYJLHTM"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              JS
            </p>
          </a>
        </div>

        <div className="skills-div">
          <FaReact className="skills-img" style={{color: '#429cf0'}} />
          <a
            href="https://certificates.ccbp.in/intensive/react-js?id=XSKXTXKPOQ"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              React
            </p>
          </a>
        </div>

        <div className="skills-div">
          <FaGithub className="skills-img" style={{color: '#000000'}} />
          <a
            href="https://certificates.ccbp.in/intensive/developer-foundations?id=MWQFCTFCES"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              Git
            </p>
          </a>
        </div>

        <div className="skills-div">
          <FaDatabase className="skills-img" style={{color: '#2548a8'}} />

          <a
            href="https://certificates.ccbp.in/intensive/introduction-to-databases?id=MJKPQROZMH"
            target="_blank"
            rel="noreferrer"
            className="skills-link-element"
          >
            <p className="skills-name">
              <FaLink className="skills-link-logo" />
              Sql
            </p>
          </a>
        </div>
      </div>
      <Link to="/contact">
        <button type="button" className="about-btn">
          CONTACT
        </button>
      </Link>
    </div>
  </>
)

export default Skills
