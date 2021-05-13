import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbars = () => {
  const styles={ 
    fontSize: '35px',
  }
    return (
<Navbar expand="lg">
  <Navbar.Brand style={styles} className="font-weight-bold text-info" href="home">Dentist Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} className="mr-3" to="home">Home</Nav.Link>
      <Nav.Link as={Link} className="mr-3" to="#services">Dental Services</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info" to="dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info" to="appointment">Appointments</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info" to="#contract">Contract Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;