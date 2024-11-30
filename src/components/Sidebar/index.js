import {useState} from 'react'
import {Link} from 'react-router-dom'

import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaYoutube,
  FaClipboardList,
  FaPhoneAlt,
} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {GiSkills, GiCancel} from 'react-icons/gi'
import {RiBookmark3Line} from 'react-icons/ri'

import './index.css'

const Sidebar = () => {
  const [toggleProfile, setToggleProfile] = useState(true)

  const onClickProfile = () =>
    setToggleProfile(prevState => {
      setToggleProfile(!prevState)
    })

  const profileClassName = toggleProfile
    ? 'profile-bg-div'
    : 'profile-bg-dis-div'

  const renderProfileView = () => (
    <>
      <div className={profileClassName}>
        <GiCancel className="cancel-logo" onClick={onClickProfile} />
        <button type="button" className="profile-btn">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
            alt="profile"
            className="profile-img-view"
          />
        </button>
        <p className="profile-msg">Want to know more about me</p>

        <Link to="/about" className="detail-link">
          <button
            type="button"
            className="profile-about-btn"
            onClick={onClickProfile}
          >
            Click Now
          </button>
        </Link>
      </div>
    </>
  )

  const renderSideBar = () => (
    <>
      <div className="profile-img-div">
        <button type="button" onClick={onClickProfile} className="profile-btn">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
            alt="profile"
            className="profile-img"
          />
        </button>
        <p className="name">Jagadeesh Kumar</p>
        <div className="social-media-icon-div">
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

        <div className="details-div">
          <Link to="/about" className="detail-link">
            <CgProfile /> <p className="detail-p">About</p>
          </Link>
          <Link to="/skills" className="detail-link">
            <GiSkills /> <p className="detail-p">Skills</p>
          </Link>
          <Link to="/projects" className="detail-link">
            <FaClipboardList /> <p className="detail-p">Projects</p>
          </Link>
          <Link to="/certifications" className="detail-link">
            <RiBookmark3Line /> <p className="detail-p">Certifications</p>
          </Link>
          <Link to="/contact" className="detail-link">
            <FaPhoneAlt /> <p className="detail-p">Contact</p>
          </Link>
        </div>
      </div>
    </>
  )

  return (
    <>
      <div className="sidebar-bg">
        {renderProfileView()}
        {renderSideBar()}
      </div>
    </>
  )
}

export default Sidebar
