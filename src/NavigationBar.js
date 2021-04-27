import React from 'react';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import styled from 'styled-components';
import logo_tl from './logo_tl.png';
const styles = styled.div`
.Navbar{
    background-color : #222;
}
.navbar-brand, .navbar-nav .nav-link{
    color: #bbb;
    &:hover
 {
     color: white;
 }
}

`;

export const NavigationBar = () => (
    <styles>
        <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="sticky-top">
  <Navbar.Brand href="/"><img style={{ width: 150, height: 70 }} src={logo_tl} alt="Logo"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
*/}
    </Nav>
    <Nav>
       <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
      <Nav.Link href="/about">About Us</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>

      <NavDropdown title="Courses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Civil Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Mechanical Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Computer Science and Engineering</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Electrical Engineering</NavDropdown.Item>
      </NavDropdown>
      
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  </div>
    </styles>
)