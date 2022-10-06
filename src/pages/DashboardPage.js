import React, { useState } from 'react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom';
import DashboardMenus from '../components/DashboardMenus';
import userpicture from '../assets/userpicture.png';
import Lillieslogo from '../assets/Lillieslogo.png';
import '../cssfiles/dashboard.css';
import {AiFillHome, AiOutlineClose, AiFillContainer} from 'react-icons/ai';
import {FaUserCircle} from 'react-icons/fa';
import {BsFillCartCheckFill} from 'react-icons/bs';
import {GiHamburgerMenu} from 'react-icons/gi';
import Modal from '../components/Modal';
import CartModal from '../components/CartModal';
import Checkout from '../components/Checkout';
import OrderModal from '../components/OrderModal';
//import {AiFillCloseCircle} from 'react-icons/ai';

const DashboardPage = () => {

  let user = JSON.parse(sessionStorage.getItem('user'));

  //Managing menubar state
  const [sidebar, setSidebar] = useState(false) 
  const showSidebar = () => setSidebar(!sidebar)

  //cart functionality
  const [click, setClick] = useState();
  

  //MODAL STUFF

  const [modal, setModal] = React.useState(false);
  const [cartModal, setCartModal] = React.useState(false);
  const [checkoutModal, setCheckoutModal] = React.useState(false);
  const [orderModal, setOrderModal] = React.useState(false);



  const showCard = (card) =>{
    // console.log(card);
      setModal((prevState)=>{
        if(prevState === false){
            return true
        } else {
            return false
        }
      })
    
      //getting and displaying the current info that's clicked.
      setClick(card);
  }
    

    if(modal){
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal');
    }


    if(cartModal) {
      document.body.classList.add('active-modal-cart')
    } else {
      document.body.classList.remove('active-modal-cart');
    }

    


  //CART DESIGN 

  const styles = {
    backgroundColor: '#06E775', 
    cursor: 'pointer',
    color: 'black',
    padding: '10px 15px',
    borderRadius: '5px',
    fontWeight: '600'
  }


  // GETTING THE TIME OF DAY DYNAMICALLY
  const date = new Date()
  const hours = date.getHours();
  let timeOfDay
  if (hours < 12){
    timeOfDay = "Morning"
  } else if (hours >=12 && hours < 17){
    timeOfDay = "Afternoon"
  } else {
    timeOfDay = "Evening"
  }

  //MANAGING COUNT
  const [count, setCount] = React.useState(0);

    //increasing quantity
    const IncrementCounter = () => {
        setCount((prevState)=>{
            return (
                prevState + 1
            )
        })
    }

    //decreasing quantity
    const DecrementCounter = () => {
        setCount((prevState)=>{
           if(prevState < 1){
            return 0
           } else {
            return prevState - 1
           }
        })
    }

    //CART ARRAY
    const [cartArray, setCartArray] = React.useState([]); 
    // console.log(cartArray); 
    
    //ORDER ARRAY
    // const [orderArray, setOrderArray] = React.useState()


    //ADD CART
      const addCart = () => {
       
        const newCart = {
          id: cartArray.length + 1,
          foodimg: click.image,
          foodname: click.name,
          quantity: count,
          unitprice: click.unitprice,
          subtotal: count * click.unitprice
        }

        if(count !== 0){
          setCartArray((prevState)=>{
            return [
              ...prevState,
              newCart
            ]
          })
          
          alert("Item added to cart succesfully. Please click on 'your cart' from the navigation bar to find your cart items");
          setCount(0);
        } else {
          return alert('Please specify a quantity')
        }
      }

    
    localStorage.setItem('food', JSON.stringify(cartArray));


    //SHOW CART MODAL
    const showCart = ()=> {
      setCartModal((prevState)=>{
        if(prevState === false){
            return true
        } else {
          return false
        }
      })
      if(sidebar === true){
        setSidebar(false)
      } else {
        return
      }
    }

    //REMOVING A FOODCARD IN OUR CART
    const RemoveCard = (card) =>{
      const currentCartId = card.id;
      // console.log(currentCartId);
      setCartArray(prevState => 
        prevState.filter(current=>{
          // if(window.confirm('Delete Item?')){
          //   // alert('Item deleted succesfully');
          //   return current.id !== currentCartId;
          // } else {
          //   return prevState;
          // }
          return current.id !==currentCartId;
        })
      )
      // console.log(cartArray);
    }  
    

    //CHECKOUT

    const showCheckout = ()=>{
      if(cartArray.length === 0){
        return alert('Kindly add items to your cart');
      } else {
        setCartModal(false);
        setCheckoutModal((prevState)=>{
          if(prevState === false){
            return true
          } else {
            return false
          }
        })
      }
    }

  // STORING CHECKOUT INFORMATIONS
  const [payment, setPayment] = React.useState({
    cardNumber: '',
    expDate: '',
    cardCvv: '',
    cardPin: ''
  })

  const handleChange = (event)=>{
    const {name, value} = event.target
    setPayment((prevState)=>{
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    if(payment.cardCvv === "" || payment.cardNumber === "" || payment.cardPin === "" || payment.expDate === "" ){
      return alert('Please fill all available fields')
    } else {
      window.localStorage.setItem('orders', JSON.stringify(cartArray));
      alert('Payment Successful');
      setInterval(()=>{
        window.location = '/dashboard'
      }, 500)
    }
  }

  // console.log(orderArray);
  

  //DISPLAYING ORDER MODAL
  const showOrders = ()=> {
    setOrderModal((prevState)=>{
      if(prevState === false){
        return true
      } else {
        return false
      }
    })
    if(sidebar === true){
      setSidebar(false)
    } else {
      return
    }
  }

  //ORDER ARRAY FROM THE BACKEND AND SAVING IT TO A STATE
  
  const [JSONData, setJSONData] = React.useState(JSON.parse(localStorage.getItem('orders')));
  // console.log(JSONData)

  //REMOVE ORDER FUNCTIONALITY
  const RemoveOrder = (orderItem)=>{
    // console.log(orderItem);
    const currentOrderId = orderItem.id;
    // console.log(currentOrderId);

    setJSONData(prevState => prevState.filter(current=>{
      return current.id !== currentOrderId
    }))
    
  }
  window.localStorage.setItem('orders', JSON.stringify(JSONData));



  return (
    <Fragment>
      <nav className='dashboard-nav'>
        <button onClick={showSidebar}>{sidebar ? <AiOutlineClose/> : <GiHamburgerMenu/>}</button>
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
                      Home
                  </Link>
                </li>

                <li>
                  <Link to={'/dashboard'}>
                      <i><FaUserCircle/></i>
                      Dashboard
                  </Link>
                </li>

                <li onClick={showOrders}>
                  <Link to={''}>
                      <i><AiFillContainer/></i>
                      Orders <p style={{backgroundColor: '#06E775', padding: '2px 8px', display: 'inline-block', borderRadius: '5px', color: 'black', fontWeight: '700', margin: '0px 0px 0px 5px', fontSize: '13px'}}>{JSONData ? `${JSONData.length}` : '0'}</p>
                  </Link>
                </li>

                <li onClick={showCart}>
                  <Link to={''} >
                      <i><BsFillCartCheckFill/></i>
                      Your Cart <p style={{backgroundColor: 'orange', padding: '2px 8px', display: 'inline-block', borderRadius: '5px', color: 'black', fontWeight: '700', margin: '0px 0px 0px 5px', fontSize: '13px'}}>{cartArray && cartArray.length}</p>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='dashboard-items'>

            <div className='dashboard-greeting'>
              <div>
                <h2>Good {timeOfDay}, <strong>{user?.name}!</strong></h2>
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
                        <div key={index} className='dashboard-food-card'>
                            <div className='dashboard-menu-card-img'>
                              <img className='dashboard-menu-img' src={item?.image} alt='menu-img'/>
                            </div>
                            <h2>{item?.name}</h2>
                            <p>{item?.description}</p>
                            <div className='menucard-action-div'>
                              <h3>{item?.price}</h3>
                              <p onClick={()=>showCard(item)} style={styles}>Add to cart</p>
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

      {modal && (
        <Modal
          imagesrc={click.image}
          name={click.name}
          desc={click.details}
          price={click.price} 
          overlay={showCard}
          close={showCard}
          decreasecounter={DecrementCounter}
          increasecounter={IncrementCounter}
          count={count}
          addCart={addCart}
        />
      )}

      {
        cartModal && (
          <CartModal
            overlay={showCart}
            proparray={cartArray}
            remove={RemoveCard}
            checkout={showCheckout}
          />
        )
      }

      {
        checkoutModal && (
          <Checkout 
            toggleModal={showCheckout}
            checkoutModal={checkoutModal}
            onChange={handleChange}
            payment={payment}
            submit={handleSubmit}
          />
        )
      }

      {
        orderModal && (
          <OrderModal 
          toggleModal={showOrders}
          orderModal={orderModal}
          JSONData = {JSONData}
          remove={RemoveOrder}
          />
        )
      }
    </Fragment>
  )
}

export default DashboardPage