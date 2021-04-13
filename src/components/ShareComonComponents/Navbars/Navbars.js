import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navbars = () => {
    return (
<Navbar expand="lg">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="mr-3" href="#home">Home</Nav.Link>
      <Nav.Link className="mr-3" href="#link">About</Nav.Link>
      <Nav.Link className="mr-3" href="#home">Dental Services</Nav.Link>
      <Nav.Link className="mr-3 text-white" href="#link">Review</Nav.Link>
      <Nav.Link className="mr-3 text-white" href="#home">Blogs</Nav.Link>
      <Nav.Link className="mr-3 text-white" href="#link">Contract Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;