import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Gareden Hotel</Navbar.Brand>
          <Nav className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/signup">Sign Up</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
