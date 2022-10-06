import React, { Fragment } from 'react'
import '../cssfiles/cartmodal.css'



const OrderModal = ({toggleModal, remove, orderModal, JSONData}) => {

    // const JSONData = JSON.parse(localStorage.getItem('orders'));
    
    
    if(orderModal) {
        document.body.classList.add('active-modal-cart')
    } else {
        document.body.classList.remove('active-modal-cart');
    }

    function cooking (){
        return (
            <p style={{color: 'red', margin: '0px'}}>Cooking</p>
        )
    }
    
  return (
    <Fragment>
        <div className='modal'>
            <div onClick={toggleModal} className='overlay'></div>
            <div className='modal-content-cart'>
                <div className='header-div'>
                    <h2 className='your-cart'>Your Orders</h2>
                    <button onClick={toggleModal} className='close-btn-cart'> Close Modal </button>
                </div>
                <div className='htitle-div'>
                    <p>Item</p>
                    <div className='htitle-order'>
                        <p>Qty</p>
                        <p>Price</p>
                        <p>Status</p>
                    </div>
                </div>

                {
                    JSONData && JSONData.map((item, index)=>{
                        return(
                            <>
                                <div key={index} className='cart-item'>
                                    <div className='cart-info'>
                                        <img src={item.foodimg} alt='menu'/>
                                        <div>
                                            <p>{item.foodname}</p>
                                            <button onClick={()=>remove(item)}>Remove</button>
                                        </div>
                                    </div>
                                    <div className='cart-prices'>
                                        <p>{item.quantity}</p>
                                        <p>N{(item.unitprice).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                        <p className='delivered-text'>{item.unitprice < 3000 ? 'Delivered' : cooking()}</p>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            
                {/* <div className='subtotal-div'>
                    <p className='subtotal'>Total:<strong>N{sum.toLocaleString(undefined, {maximumFractionDigits:2})}</strong></p>
                </div>


                <button onClick={checkout} className='checkout-btn'>
                    PROCEED TO CHECKOUT
                    <i style={{marginLeft: '5px', fontSize: '15px'}}><AiFillBank/></i>
                </button> */}
            </div>
        </div>
    </Fragment>
  )
}

export default OrderModal