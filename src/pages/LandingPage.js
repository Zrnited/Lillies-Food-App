import React from 'react'
import '../cssfiles/landingpage.css'
import Lillieslogo from '../assets/Lillieslogo.png';
import Badges from '../assets/Badges.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import background from '../assets/background.png';
import appstoreimage from '../assets/appstoreimage.png';
import googleplayimage from '../assets/googleplayimage.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';
import { Link } from 'react-router-dom';
import LinksComponent from '../components/LinksComponent';
import FoodCardComponent from '../components/FoodCardComponent';
import OtherLinksComponent from '../components/OtherLinksComponent';
import MenuBarsComponent from '../components/MenuBarsComponent';

const LandingPage = () => {
  return (
    <>
    {/* HEADER STARTS */}
    <header>
        <nav>
            <div className='heading'>
                <div className ='logodiv'>
                    <img src={Lillieslogo} alt='logo'/>
                </div>
                <Link to={'/'}><h1>lillies</h1></Link>
            </div>

            <div className='links'>
                <ul>
                    <li className='home-link'>
                        <Link to={'/'}><LinksComponent text={'Home'}/></Link>
                    </li>
                    <li className='login-link'>
                        <Link to={'/login'}><LinksComponent text={'Login'}/></Link>
                    </li>
                </ul>
                <Link to={'/signin'}><button className='sign-up-btn'>Sign Up</button></Link>
            </div>

            <MenuBarsComponent/>
        </nav>
    </header>
    {/* HEADER ENDS */}

    {/* SECTION BEGINS */}

    <section>
        <div className='background-container'>
            <img src={background} alt='background'/>
        </div>

        <article className='first-article'>
            <div className='intro-text'>
                <h1>Order <span>food</span> anytime, anywhere</h1>
                <p>Browse from our list of specials to place your order and have food delivered to you in no time. Affordable, tasty and fast!</p>
                <img src={Badges} alt='icons'/>
            </div>
            <div className='food-img'>
                <img src={image1} alt='food-icon'/>
            </div>
        </article>

        <article className='second-article'>
            <div className='topic'>
                <h1>Special Meals of the day!</h1>
                <p>Check our sepecials of the day and get discounts on all our meals and swift delivery to what ever location within Ilorin.</p>
            </div>
            <div className='topic-info'>
                <FoodCardComponent image={image2} foodName={'Stir fry Pasta'} foodDetails={'Stir fry pasta yada yada yada because of Sesan'}/>
                <FoodCardComponent image={image3} foodName={'Meat Balls'} foodDetails={'Stir fry pasta yada yada yada because of Kehinde'}/>
                <FoodCardComponent image={image4} foodName={'Burger Meal'} foodDetails={'Stir fry pasta yada yada yada because of Tunde'}/>
            </div>
        </article>

        <article className='third-article'>
            <div className='notification'>
                <h2>Get notified when we update!</h2>
                <p>Get notified when we add new items to our specials menu, update our price list of have promos!</p>
            </div>
            <div className='email'>
                <input type={'textbox'} placeholder={'gregphillips@gmail.com'}/>
                <button>Get notified</button>
            </div>
        </article>
    </section>

    {/* SECTION ENDS */}

    {/* FOOTER BEGINS */}

    <footer>
        <div className='explore'>
            <OtherLinksComponent pathlinkone={'https://aboutus.com'} heading={'Company'} linkone={'About Us'} pathlinktwo={'https://careers.com'} linktwo={'Careers'} pathlinkthree={'https://contactus.com'} linkthree={'Contact Us'}/>

            <OtherLinksComponent pathlinkone={'https://helpcenter.com'} heading={'Support'} linkone={'Help Center'} pathlinktwo={'https://safetycenter.com'} linktwo={'Safety Center'}/>

            <OtherLinksComponent pathlinkone={'https://privacypolicy.com'} heading={'Legal'} linkone={'Privacy Policy'} pathlinktwo={'https://companypolicy.com'} linktwo={'Company Policy'} pathlinkthree={'https://termsofservice.com'} linkthree={'Terms of Service'} linkfour={'Dispute resolution'} pathlinkfour={'https://disputeresolution.com'}/>

            <div className='installdiv'>
                <h2>Install App</h2>
                <a href='https://googleplay.com'><img className='image' src={googleplayimage} alt='icons'/></a>
                <a href='https://applestore.com'><img className='image' src={appstoreimage} alt='icons'/></a>
            </div>
        </div>
        <div>
            <hr></hr>
            <div className='links-container'>
                <p>© 2021 LILIES, All rights reserved</p>
                <div className='social-media-links'>
                    <div><a href='https://instagram.com/lilliesfood' target='_blank' rel="noreferrer"><img src={instagram} alt='social-media'/></a></div>
                    <div><a href='https://twitter.com/lilliesfood' target='_blank' rel="noreferrer"><img src={twitter} alt='social-media'/></a></div>
                    <div><a href='https://youtube.com/lilliesfood' target='_blank' rel="noreferrer"><img src={youtube} alt='social-media'/></a></div>
                </div>
            </div>
        </div>
    </footer>

    {/* FOOTER ENDS */}
    </>
  )
}

export default LandingPage