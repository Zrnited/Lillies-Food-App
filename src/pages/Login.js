import React, { useState } from 'react';
import '../cssfiles/login.css';
import loginpic from '../assets/loginpic.png';
import { Link } from 'react-router-dom';
import Lillieslogo from '../assets/Lillieslogo.png';
import {AiFillEye} from 'react-icons/ai';
import {AiFillEyeInvisible} from 'react-icons/ai';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    //authentication
    let user = JSON.parse(sessionStorage.getItem('user'));
    
    
    console.log(user.email);
    console.log(loginData?.email);

    if(user.email !== null && user.password !== null){
      if(loginData?.email === user?.email && loginData?.password === user?.password){
        alert("Login Successful!");
        window.location = '/dashboard';
      } else {
        alert("Invalid credentials");
      }
    } else {
      alert('Details not found. Kindly sign up.');
    }
  }

  const [passwordType, setpasswordType] = useState("password");
  const [isShown, setIsShown] = React.useState(false);
 

  const TogglePassword = (e) => {
    e.preventDefault();
    if(passwordType === "password"){
      setpasswordType("text");
      setIsShown(true);
      return
    } else {
      setpasswordType("password");
      setIsShown(false);
    }
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
          <p className='show' onClick={TogglePassword}>
            <i>
              {isShown ? <AiFillEye/> : <AiFillEyeInvisible/>}
            </i>
          </p>
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