import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Contact from './components/Contact'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/skills" component={Skills} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/certifications" component={Certifications} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </>
)

export default App
