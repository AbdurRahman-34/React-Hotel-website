import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import './Signup.css'


const Signup = () => {

  //All State 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [error, setError] = useState("")
  const navigate = useNavigate()



  //All Functions 
  const [createUserWithEmailAndPassword, user]  = useCreateUserWithEmailAndPassword(auth)

  if(user){
    navigate('/')
  }

  const handelEmailBlur = (e) => {
    setEmail(e.target.value)
  }

  const handelPasswordBlur = e => {
    setPassword(e.target.value)
  }

  const handelConPasswordBlur = e => {
    setConPassword(e.target.value)
  }

  const handelSignUp = (e) => {
    e.preventDefault();
    if(password !== conPassword){
      setError("You two password don't match")
      return;
    }
    if(password < 6) {
      setPassword("Password Must be 6 Creacter")
      return;
    }
    createUserWithEmailAndPassword(email, password)
  }

  return (
      <div className="form-main">
        <Form onSubmit={handelSignUp} className="form-container">
        <h2>Sign Up</h2> <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">

          
          <Form.Label>Email</Form.Label>
          <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" />
        </Form.Group>



        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onBlur={handelConPasswordBlur} type="password" placeholder="Confirm Password" />
        </Form.Group>

        <p style={{color: 'red'}}> {error}</p>
        <p>Already have a account ? <Link className="login-link" to="/login">Login →</Link></p>
        <Button onSubmit={handelSignUp} variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
      </div>
  );
};

export default Signup;
