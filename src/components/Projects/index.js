import {Link} from 'react-router-dom'

import TimeLineView from '../TimeLineView'

import Header from '../Header'

import './index.css'

const timelineItemsList = [
  {
    id: '4938c3d1-81cd-4729-9d2c-dcd50796aa4d',
    categoryId: 'COURSE',
    title: '06 SEPTEMBER 2023',
    courseTitle: 'Dynamic Website',
    description:
      'Learn the fundamental concepts in JavaScript and apply them to build dynamic and interactive web applications like Counter, Guessing Game, Chat Web app, Todos Application etc.',
    duration: '20 days',
    tagsList: [
      {
        id: 'd4743c06-f767-11eb-9a03-0242ac130003',
        name: 'Declaring Variables',
      },
      {
        id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
        name: 'Comparison Operator',
      },
      {
        id: 'd4743fe4-f767-11eb-9a03-0242ac130003',
        name: 'Functions',
      },
      {
        id: 'd47440d4-f767-11eb-9a03-0242ac130003',
        name: 'Object',
      },
      {
        id: 'd474434a-f767-11eb-9a03-0242ac130003',
        name: 'DOM Manipulations',
      },
      {
        id: 'd474443a-f767-11eb-9a03-0242ac130003',
        name: 'Loops',
      },
      {
        id: 'd4744516-f767-11eb-9a03-0242ac130003',
        name: 'Local Storage',
      },
    ],
  },
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: '30 SEPTEMBER 2023',
    projectTitle: 'Todos Application',
    description:
      'This app helps users to track the day to day tasks. Users can create, edit, track the status of each todo item and able to persist them over page reloads.',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png',
    duration: '3 hrs',
    projectUrl: 'https://jagadeeshtd.ccbp.tech/',
  },

  {
    id: '0a35abbe-22ca-40a1-81da-613f656b7702',
    categoryId: 'PROJECT',
    title: '15 OCTOBER 2023',
    projectTitle: 'Wikipedia Search Application',
    description:
      'Using this Wikipedia Search Application users can search and view curated results and can see detailed explanations in Wikipedia by clicking on the specific result.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/wiki-logo-img.png',
    duration: '4 hrs',
    projectUrl: 'https://jagadeeshwp.ccbp.tech/',
  },

  {
    id: 'e681e826-260c-4540-9ee5-f53d0e65cba0',
    categoryId: 'COURSE',
    title: '24 NOVEMBER 2023',
    courseTitle: 'React JS Getting Started',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '18 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'React JS',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'JS',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'HTML CSS',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'JWT Token',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130524',
        name: 'Local Storage',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac134254',
        name: 'Authentication',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ad5987254',
        name: 'Authorization',
      },
    ],
  },
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: '06 DECEMBER 2023',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '6 hrs',
    projectUrl: 'https://jagadeeshsp.ccbp.tech/login',
  },

  {
    id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
    categoryId: 'COURSE',
    title: '24 DECEMBER 2023',
    courseTitle: 'React JS Project',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this project, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '18 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'React JS',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'JS',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'HTML CSS',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'JWT Token',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130524',
        name: 'Client Storage',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac134254',
        name: 'Authentication',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ad5987254',
        name: 'Authorization',
      },
      {
        id: '94948400-f768-11eb-9a03-02580c134254',
        name: 'React Slick',
      },
      {
        id: '94948400-f768-11eb-9a03-0658dd5987254',
        name: 'Figma',
      },
    ],
  },
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: '07 JANUARY 2024',
    projectTitle: 'Tasty Kitchens (Swiggy/Zomato Clone)',
    description:
      'Constructed an engaging Online Food Ordering Service akin to Swiggy/Zomato, enabling users to discover top restaurants, obtain in-depth restaurant details, manage their cart, and process payments. (username: rahul Password: rahul@2021)',
    imageUrl:
      'https://res.cloudinary.com/dakmxu3dl/image/upload/v1688402077/Rectangle_1456_kitchenImg_mnkoox.png',
    duration: '8 hrs',
    projectUrl: 'https://jagadeeshkmrapp.ccbp.tech/login',
  },

  {
    id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
    categoryId: 'COURSE',
    title: '28 JANUARY 2024',
    courseTitle: 'React JS Project',
    description:
      'Learn how to build dynamic web applications with the React JS library. When you finish this course, you will be comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '12 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'React JS',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'JS',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'HTML CSS',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'Bootstrap',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'Local Storage',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
    ],
  },
  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: '04 FEBRUARY 2024',
    projectTitle: 'Find Jobs App',
    description:
      'Brought to life an all-encompassing job search platform, Find Jobs App. Where users can log in and see the list of jobs with search, filters, sort by, etc.',
    imageUrl:
      'https://www.signitysolutions.com/hubfs/raw_assets/public/signitysolutions/site-import/images/services/job-portal/banner.png',
    duration: '4 hrs',
    projectUrl: 'https://jagadeeshjb.ccbp.tech/login',
  },
]

const Projects = () => (
  <>
    <Header />
    <div className="projects-bg-container">
      <h1 className="my-projects">My Projects</h1>
      <TimeLineView timelineItemsList={timelineItemsList} />
      <Link to="/skills">
        <button type="button" className="about-btn skills-btn">
          SKILLS
        </button>
      </Link>
    </div>
  </>
)

export default Projects
