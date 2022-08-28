import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../cssfiles/login.css';
import signuppic from '../assets/signuppic.png';
import Lillieslogo from '../assets/Lillieslogo.png';

const SignIn = () => {

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

  // collecting data from the form and storing in my session storage. We are using useState

  const [form, setForm] = useState({
    name: "", 
    email: "",
    password: ""
  })
  // console.log(form);

  //next, we write a function to update our form once the data is being passed in from the front end.

  //write two functions
  //1. A function to capture the data

    const handleChange = (e) => {
      console.log(e)
      setForm({
        ...form,
        [e.target.name]: e.target.value
      })
      console.log(form);
    }

  //2. A function to submit the data i.e save and store the data in your computer

  const handleSubmit = (e) =>{
    e.preventDefault();
    
    //set the data to sessionStorage
    sessionStorage.setItem('user', JSON.stringify(form));

    //redirect users to login page
    setInterval (()=>{
      window.location = '/login';
    }, 1000);
  }

  return (
    <>
      <div className='body'>
        <div className='pic-container'>
          <img src={signuppic} alt="login-pix"/>
        </div>

        <div className='pic-container2'></div>

        <div className='login-details-container'>
            <div className='heading-login'>
                <div className ='logodiv-login'>
                        <img src={Lillieslogo} alt='logo'/>
                </div>
                <Link to={'/'}><h1>lillies</h1></Link>
            </div>

          <h1 className='welcome-back-text'>Welcome to Lillies!</h1>

          <form onSubmit={handleSubmit}>
            <input type={'textbox'} placeholder={'Your first name'} name='name' onChange={handleChange} required/>
            <input type={'textbox'} placeholder={'Your email address'} name='email' onChange={handleChange} required/>
            <input id='password-input' type={passwordType} placeholder={'Your password'} name='password' onChange={handleChange} required/>
            <p className='show' onClick={TogglePassword}>show</p>
            <button>SIGN IN</button>
          </form>

          <div className='coast'>
            <span>
              Already have an account? <Link to={'/login'}>LOGIN</Link>
            </span>
          </div>

          <div className='home'><Link to={'/'}><p>Go back to homepage</p></Link></div>
          
        </div>
      </div>
    </>
  )
}

export default SignIn