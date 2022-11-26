import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import  auth from "../../../firebase.init"
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const handelSignOut = () => {
    signOut(auth)
  }
  return ( 
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Gareden Hotel</Navbar.Brand>
          <Nav className="nav-container">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/signup">Sign Up</Link>
            {
              user 
              ?
              <button onClick={handelSignOut}>Sign Out</button>
              :
              <Link to="/login">Login</Link>
            }
            <Link to="/contact">Contact</Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
