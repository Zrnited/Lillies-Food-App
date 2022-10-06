import React from 'react'
import '../cssfiles/cartmodal.css';
import {AiFillBank} from 'react-icons/ai';

const CartModal = ({overlay, proparray, remove, checkout}) => {

    //getting the stored data from the backend
    const JSONData = JSON.parse(localStorage.getItem('food'));

    //filtering out only a section from the objects passed into the array
    const priceArray = JSONData.map(item => item.subtotal);

    let sum = 0;

    //getting the sum of all the filtered objects returned from the previous array 
    for(let num of priceArray){
        sum = sum + num;
    }

  return (
    <div className='modal'>
        <div onClick={overlay} className='overlay'></div>
        <div className='modal-content-cart'>
            <div className='header-div'>
                <h2 className='your-cart'>Your Cart</h2>
                <button onClick={overlay} className='close-btn-cart'> Close Modal </button>
            </div>
            <div className='htitle-div'>
                <p>Item</p>
                <div className='htitle'>
                    <p>Qty</p>
                    <p>Unit Price</p>
                    <p>Sub-total</p>
                </div>
            </div>

            {
                proparray && proparray.map((item, index)=>{
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
                                    <p>N{(item.quantity * item.unitprice).toLocaleString(undefined, {maximumFractionDigits:2})}</p>
                                </div>
                            </div>
                        </>
                    )
                })
            }
         
            <div className='subtotal-div'>
                <p className='subtotal'>Total:<strong>N{sum.toLocaleString(undefined, {maximumFractionDigits:2})}</strong></p>
            </div>


            <button onClick={checkout} className='checkout-btn'>
                PROCEED TO CHECKOUT
                <i style={{marginLeft: '5px', fontSize: '15px'}}><AiFillBank/></i>
            </button>
        </div>
        
    </div>
  )
}

export default CartModal