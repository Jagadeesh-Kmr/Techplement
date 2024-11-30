import {Link, withRouter} from 'react-router-dom'

import {GiSkills} from 'react-icons/gi'
import {RiBookmark3Line} from 'react-icons/ri'
import {FaClipboardList, FaPhoneAlt} from 'react-icons/fa'

import './index.css'

const Header = () => (
  <>
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <Link to="/about" className="nav-link-about">
            About<span style={{color: '#ffffff'}}>ME.</span>
          </Link>

          <li className="nav-menu-item-mobile-home">
            <Link to="/home" className="nav-link-home">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
                alt="nav home"
                className="nav-bar-home-img"
              />
            </Link>
          </li>
        </div>

        <div className="nav-bar-large-container">
          <Link to="/about" className="nav-link-about">
            About<span style={{color: '#ffffff'}}>ME.</span>
          </Link>
          <ul className="nav-menu">
            <li className="nav-menu-item">
              <Link to="/home" className="nav-link">
                Home
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/skills" className="nav-link">
                Skills
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/certifications" className="nav-link">
                Certifications
              </Link>
            </li>

            <li className="nav-menu-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <Link to="/skills" className="nav-link">
              <GiSkills className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/projects" className="nav-link">
              <FaClipboardList className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/certifications" className="nav-link">
              <RiBookmark3Line className="nav-bar-icon" />
            </Link>
          </li>
          <li className="nav-menu-item-mobile">
            <Link to="/contact" className="nav-link">
              <FaPhoneAlt className="nav-bar-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  </>
)

export default withRouter(Header)
