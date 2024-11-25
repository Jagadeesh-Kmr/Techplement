import {Link} from 'react-router-dom'
import './index.css'
import Header from '../Header'

const About = () => (
  <>
    <Header />
    <div className="about-div">
      <h1 className="about-main-h1">
        {`HEY, I'AM  `}
        <span className="my-name">JAGADEESH</span>
      </h1>
      <p className="about-desc">
        Critical thinker with an instinct for design who plans to use these
        qualities in a front-end developer role that allows me to further
        develop my skills.
      </p>
      <Link to="/projects">
        <button type="button" className="about-btn">
          PROJECTS
        </button>
      </Link>
    </div>
  </>
)

export default About
