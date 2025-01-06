import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Courses = () => {
  const renderFullStackCourseDetails = () => (
    <>
      <p className="courses-p">Full Stack Course</p>
      <ul className="courses-ul">
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">HTML CSS BootStrap</p>
          <p className="courses-detail">
            Build a responsive website that appears beautifully on a screen of
            any size. Develop a food munch website, an E-commerce product
            listing website for small business owners using bootstrap
            fundamental concepts. Use tools and technologies such as HTML, CSS,
            and Bootstrap.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">JavaScript</p>
          <p className="courses-detail">
            In this course, you will learn concepts such as Events, Scope,
            Hoisting, and Asynchronous JavaScript. You will also learn about ES6
            classes, Error Handling, and more about JavaScript objects.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">React</p>
          <p className="courses-detail">
            In this course, you will learn how to build dynamic web applications
            with the React JS library. When you finish this course, you will be
            comfortable in creating a modern, clean, and maintainable
            application in React JS, from scratch.
          </p>
        </li>

        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Node JS</p>
          <p className="courses-detail">
            In this course, you will learn how to build a backend web
            application using one of the most popular and mature Javascript web
            development frameworks, Express. This course covers various aspects
            of web application development like database, routing, urls etc.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">SQL</p>
          <p className="courses-detail">
            Learn about the incredibly prevalent databases today. Through this
            course, you will develop strong fundamentals and be proficient in
            concepts related to Databases and DBMS. Most importantly, you will
            also be able to perform powerful queries on databases using SQL.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Developer Foundations</p>
          <p className="courses-detail">
            You will learn the essentials of Operating Systems, Networks and use
            some essential tools like Command-Line and Git to become a better
            developer. You will learn to version your software with Git and push
            your code to GitHub.
          </p>
        </li>
      </ul>
    </>
  )

  const renderProgrammingCourseDetails = () => (
    <>
      <p className="courses-p">Programming Course</p>
      <ul className="courses-ul">
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Java Fundamentals</p>
          <p className="courses-detail">
            In this course, you will learn you will learn the fundamental
            concepts of Java. This course covers various aspects of Java.On
            completing this course you will be comfortable in creating your own
            programs using Java. Java provides a solid foundation to bring your
            ideas to life.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Spring Boot Tutorial</p>
          <p className="courses-detail">
            In this course, you will learn concepts Spring Boot. Spring Boot is
            a Java framework that makes it easier to create and run Java
            applications. It simplifies the configuration and setup process,
            allowing developers to focus more on writing code for their
            applications.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Problem Solving Pattern</p>
          <p className="courses-detail">
            A resource that provides tips for mastering problem solving,
            including breaking problems into smaller sub-problems, practicing
            communicating your thought process, and participating in coding
            challenges.
          </p>
        </li>
        <li className="courses-li">
          <img
            src="https://oneandallservices.com/images/Dynamic-Website.jpg"
            alt="course"
            className="courses-img"
          />
          <p className="courses-name">Python</p>
          <p className="courses-detail">
            Learning to code is useful no matter what your career ambitions are.
            In this course, we demystify programming. You will learn the
            fundamental concepts of programming, learn to write code in Python
            and solve the challenging coding questions for practice along the
            way.
          </p>
        </li>
      </ul>
    </>
  )

  return (
    <>
      <Header />
      <div className="courses-main-div">
        <h1 className="courses-h1">Our Courses</h1>
        {renderFullStackCourseDetails()}
        {renderProgrammingCourseDetails()}
        <Link to="/contact" className="link">
          <button type="button" className="contact-btn">
            CONTACT
          </button>
        </Link>
      </div>
    </>
  )
}

export default Courses
