import logo from './logo.svg';
import './App.css';
import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from './Components/Home';
import {About} from './Components/About';
import {CollegeTraining} from './CollegeTraining';
import {Layout} from './Layout';
import {NavigationBar} from './NavigationBar';
import {Contact} from './Components/Contact';
import Register from './Components/Registration';
import ImageSlider from './ImageSlider'
import { SliderData } from './SliderData';

function App() {
  return (
    <React.Fragment>
    <NavigationBar/>
    <br/>
    <br/>
    <br/>
  <Layout>
    
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/register" component={Register}/>
      <Route exact path="/collegeTraining" component={CollegeTraining}/>
     </Switch>
    </Router>
   </Layout>
   
  </React.Fragment>
  );
}

export default App;
