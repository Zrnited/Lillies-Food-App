import React from 'react';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { BiLogInCircle } from 'react-icons/bi';
import { AiFillHome } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../cssfiles/menubars.css';
import LinksComponent from './LinksComponent';

const MenuBarsComponent = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
        <button className='hamburger-btn' onClick={showSidebar}>
            <GiHamburgerMenu/>
        </button>

        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <button className='close-btn'onClick={showSidebar}>
                <AiOutlineClose/>
            </button>
            <ul className='nav-menu-items' onClick={showSidebar}>
                <li className='first-li'>
                    <i className='first-i'><AiFillHome/></i><Link to={'/'}><LinksComponent text={'Home'}/></Link>
                </li>
                <li className='second-li'>
                    <i className='second-i'><BiLogInCircle/></i><Link to={'/login'}><LinksComponent text={'Login'}/></Link>
                 </li>
            </ul>
            <Link to={'/signin'}><button className='sign-up-btn-hamburger'>Sign Up</button></Link> 
        </nav>
    </>
  )
}

export default MenuBarsComponent