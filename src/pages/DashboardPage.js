import React, { useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import { DashboardMenus } from '../components/DashboardMenus';
import userpicture from '../assets/userpicture.png';
import Lillieslogo from '../assets/Lillieslogo.png';
import '../cssfiles/dashboard.css';
import {AiFillHome} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {AiFillContainer} from 'react-icons/ai';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
//import {AiFillCloseCircle} from 'react-icons/ai';

const DashboardPage = () => {

  let user = JSON.parse(sessionStorage.getItem('user'));

  //Managing menubar state
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () => setSidebar(!sidebar)

  //cart functionality
 
  const [counter, setCounter] = useState(0)

  const IncrementCounter = () =>{
    setCounter(counter+1);
    console.log(counter);
  }

  const DecrementCounter = () =>{
    setCounter(counter - 1);
    if(counter === 0){
      setCounter(0);
      console.log(counter)
    }
  }

  

  return (
    <Fragment>
      <nav className='dashboard-nav'>
        <button onClick={showSidebar}><GiHamburgerMenu/></button>
      </nav>

      <div className='dashboard'>
        <div className={sidebar ? 'dashboard-navigation active' : 'dashboard-navigation'}>
            <div className='dashboard-header'>
              <img src={Lillieslogo} alt='lillies'/>
              <h1>Lillies</h1>
            </div>
            <div className='dashboard-links'>
              <ul>
                <li>
                  <Link to={'/'}>
                      <i><AiFillHome/></i>
                      Dashboard
                  </Link>
                </li>

                <li>
                  <Link to={'/profile'}>
                      <i><FaUserCircle/></i>
                      Your Profile
                  </Link>
                </li>

                <li>
                  <Link to={'/orders'}>
                      <i><AiFillContainer/></i>
                      Orders
                  </Link>
                </li>

                <li>
                  <Link to={'/carts'}>
                      <i><BsFillCartCheckFill/></i>
                      Your Cart <p style={{backgroundColor: 'orange', padding: '2px 8px', display: 'inline-block', borderRadius: '5px', color: 'black', fontWeight: '600', margin: '0px 0px 0px 5px', fontSize: '13px'}}>{counter}</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='dashboard-items'>

            <div className='dashboard-greeting'>
              <div>
                <h2>Hi there, <strong>{user?.name}!</strong></h2>
                <p>What delicious meal are you craving today?</p>
              </div>

              <div className='dashboard-user-picture'>
                <img src={userpicture} alt='user'/>
              </div>
            </div>

            <div className='dashboard-menus'>
              <div className='dashboard-menus-card-container'>
                {
                  DashboardMenus && DashboardMenus?.map((item, index) => {
                    return (
                      <>
                        <div className='dashboard-food-card'>
                          <div className='dashboard-menu-card-img'>
                            <img className='dashboard-menu-img' src={item?.image}/>
                          </div>
                          <h2>{item?.name}</h2>
                          <p>{item?.description}</p>
                          <div className='menucard-action-div'>
                            <h3>{item?.price}</h3>
                            <p onClick={IncrementCounter} style={{color: '#06E775', cursor: 'pointer'}}>Add to cart</p>
                            <p onClick={DecrementCounter} style={{color: 'red', cursor: 'pointer'}}>Remove</p>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default DashboardPage