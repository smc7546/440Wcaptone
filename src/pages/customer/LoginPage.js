import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./LoginPageElements.css";
import axios from 'axios';
import {
  Nav,
  NavMenu,
  NavLogo,
} from '../../components/NavbarElements'

function LoginPage() {
  const startData = {
    email: '',
    password: ''
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false); //obj for valid form submit
  const [isSubmitted, setIsSubmitted] = useState(false); //store obj name field w/ error msg
  const [isValid, setIsValid] = useState(false); //used for validation determination
  const [errorMessages, setErrorMessages] = useState({});
  const email = useState('');
  const password = useState('');
  const navigate = useNavigate();
  const [response, setResponse] = useState(''); //backend response holder
  const [data, setData] = useState(startData);
  const [apiResult, setApiResult] = useState('');

  const {
    register,
    formState: { errors }
  } = useForm()

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

   function getValidation(email, password) {
      axios.get(`/api/validate/${email}/${password}`)
         .then((response) => { setApiResult(response.data) })
         .catch((error) => {
           console.log(error);
         });

       return apiResult;
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setData({...data, [name]: value })
  }

  //function for handling submit form button
  const handleSubmitForm = (event) => {
    //prevent page reload when submit button is selected
    event.preventDefault();

    getValidation(data.email, data.password);


    if ( apiResult === "Valid Credentials"  ) {
      setIsValid(true);
      setIsSubmitted(true);
      setIsLoggedIn(true);
      navigate("/home");
    }
    else {
      setIsLoggedIn(false);
      setErrorMessages({name: "password", message: error.comboError});
    }

  };

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
  );
}

export default LoginPage;