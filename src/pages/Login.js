import React, { useState } from 'react';
import '../cssfiles/login.css';
import loginpic from '../assets/loginpic.png';
import { Link } from 'react-router-dom';
import Lillieslogo from '../assets/Lillieslogo.png';
// import styled from 'styled-components';


const Login = () => {

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  console.log(loginData)

  const handleSubmit = (e) => {
    e.preventDefault();
    //authentication
    let user = JSON.parse(sessionStorage.getItem('user'));
    console.log(user.email);
    console.log(loginData?.email);

    if(loginData?.email === user?.email && loginData?.password === user?.password){
      alert("Login Successful!");
      window.location = '/dashboard';
    } else {
      alert("Invalid credentials");
    }
  }

  const [passwordType, setpasswordType] = useState("password");
  const [passwordinputType, setpasswordInputType] = useState("");
  const handlepassword = (e) => {
    setpasswordInputType(e.target.value);
  }

  const TogglePassword = (e) => {
    e.preventDefault();
    if(passwordType === "password"){
      setpasswordType("text");
      return
    } else {
      setpasswordType("password");
    }
    console.log(passwordType);
  }

  return (
    
    <div className='body'>

      <div className='pic-container'>
        <img src={loginpic} alt="login-pix"/>
      </div>

      <div className='pic-container2'></div>

      <div className='login-details-container'>
          <div className='heading-login'>
              <div className ='logodiv-login'>
                      <img src={Lillieslogo} alt='logo'/>
              </div>
              <Link to={'/'}><h1>lillies</h1></Link>
          </div>

        <h1 className='welcome-back-text'>Welcome Back!</h1>

        <form onSubmit={handleSubmit}>
          <input type={'textbox'} placeholder={'Your email address'} onChange={handleChange} name='email' required/>
          <input id='password-input' type={passwordType} onChange={handleChange} placeholder={'Your password'} name='password' required/>
          <p className='show' onClick={TogglePassword} >show</p>
          <button>LOGIN</button>
        </form>

        <div className='coast'>
          <Link to={'/signin'}><p>Create an account</p></Link>
          <p>Forgot Password</p>
        </div>

        <div className='home'><Link to={'/'}><p>Go back to homepage</p></Link></div>
        
      </div>
    </div>
  )
}

export default Login