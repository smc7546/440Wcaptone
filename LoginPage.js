import React, { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./LoginPageElements.css";
import axios from 'axios';
import {
  Nav,
  NavMenu,
  NavLogo,
} from '../../components/NavbarElements';
import PropTypes from 'prop-types';
import Home from './Home.js';
import debounce from 'debounce';

async function loginUser(creds) {
    return fetch(`/api/validate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(creds)
    })
      .then(data => data.json())
}

export default function LoginPage( {setLoginToken} ) {
  const startData = {
    email: '',
    password: ''
  };

  const [isSubmitted, setIsSubmitted] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState(''); //backend response holder
  const [data, setData] = useState(startData);
  const [apiResult, setApiResult] = useState('');
  const navigate = useNavigate();
  const [count, setCount] = useState(0);

  const {
    register,
    formState: { errors }
  } = useForm()

  const dedounce = (fn, delay) => {
    let timer;
    return(...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    }
  };

  //function for creating the error message, makes things cleaner
  const createErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  //declare email/password errors
  const error = {
    comboError: "Incorrect username or password",
    emailValidError: "A valid email must be entered",
    emailRequiredError: "Email cannot be left blank",
    passwordError: "Password cannot be left blank",
    otherError: "404: Please try again later"
  };

  const handleChange = (event) => {
      const { name, value } = event.target
      setData({...data, [name]: value })
  }

  //function for handling submit form button
  const handleSubmitForm = event => {
    //prevent page reload when submit button is selected
    event.preventDefault();

    var username = data.email;
    var password = data.password;

    const loginToken = loginUser( {
      username,
      password
    });

    setLoginToken(loginToken);

    console.log(data);
    console.log(loginToken);

    if(username === "janedoe@gmail.com" && password === "test1") {
      navigate("/home")
    }

    else {
      setErrorMessages({name: "password", message: error.comboError});
    }

  }

  //function for login form, cleans up return
    const createLoginForm = (
      <div className="input-container-form">
        <form onSubmit={handleSubmitForm}>
          <div className="input-container">
            <label>Username</label>
            <input name="email" type="text" id="email" value={data.email || ''}
                 onChange={handleChange} required />
            {createErrorMessage("username")}
          </div>

          <div className="input-container">
            <label>Password</label>
            <input name="password" type="text" id="password" value={data.password || ''}
                onChange={handleChange} required />
            {createErrorMessage("password")}
          </div>

          <div className="button-container">
            <input type="submit" value="Log in" />
          </div>

          <div className="seperator" />

          <div className="extras">
            <label>If you need help with your account, please call 1-111-111-1111</label>
          </div>
        </form>
      </div>
    );


  return (
    <div className="login">
      <Nav>
          <NavMenu>
            <NavLogo to="/" className="navbar-logo">
              <img src="./myupmcLogo.png" />
            </NavLogo>
          </NavMenu>
      </Nav >
      <div className="login-form">
        <h2 className="title">Log In To Your Account</h2>
        {isSubmitted ? setIsLoggedIn(true) : createLoginForm }
      </div>
    </div>
  )

}

LoginPage.propTypes = {
  setLoginToken: PropTypes.func.isRequired
};