import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbars = () => {
  const styles={ 
    fontSize: '35px',
  }
  React.useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
    return (
<Navbar expand="lg" data-aos="fade-down">
  <Navbar.Brand style={styles} className="font-weight-bold text-info" href="home">Dentist Care</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} className="mr-3 text-info font-weight-bold" to="home">Home</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info font-weight-bold" to="/services">Dental Services</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info font-weight-bold" to="dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info font-weight-bold" to="appointment">Appointments</Nav.Link>
      <Nav.Link as={Link} className="mr-3 text-info font-weight-bold" to="/contract">Contract Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;