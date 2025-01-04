import Header from '../Header'

import './index.css'

const Courses = () => (
  <>
    <Header />
    <div className="courses-main-div">
      <h1 className="courses-h1">Our Courses</h1>
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
          <p className="courses-name">Python</p>
          <p className="courses-detail">
            Learning to code is useful no matter what your career ambitions are.
            In this course, we demystify programming. You will learn the
            fundamental concepts of programming, learn to write code in Python
            and solve the challenging coding questions for practice along the
            way.
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
    </div>
  </>
)

export default Courses
