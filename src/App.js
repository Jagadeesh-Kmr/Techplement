import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Contact from './components/Contact'
import Courses from './components/Courses'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses" component={Courses} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
)

export default App
