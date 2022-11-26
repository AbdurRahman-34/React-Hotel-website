import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from "react-bootstrap";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {

  // All State 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  // All Functions
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,] = useSignInWithEmailAndPassword(auth);
    const location  = useLocation()
    const from = location.state?.from?.pathname || '/';

  if(user){
    navigate(from, {replace : true})
  }

  const handelEmailBlur = (e) =>{
    setEmail(e.target.value)
  }

  const handelPasswordBlur = e => {
    setPassword(e.target.value)
  }

  const handelSubmitBlur = e => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password)
  }
 
  return (
    <div className="form-main">
      <div className="form-main"> 
      <Form onSubmit={handelEmailBlur}  className="form-container">
      <h2>Login</h2> <br />

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control onBlur={handelEmailBlur} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={handelPasswordBlur} type="password" placeholder="Password" />
        </Form.Group>

        {loading && <p>Loading ....</p>}
        <p style={{color: 'red'}}>{error}</p>
        <Button onSubmit={handelSubmitBlur} variant="primary" type="submit">
          Login
        </Button>
      </Form>
      </div>
    </div>
  );
};

export default Login;
