import React, { Fragment } from 'react'
import '../cssfiles/checkout.css'

const Checkout = ({toggleModal, checkoutModal, onChange, payment, submit}) => {

    if(checkoutModal) {
        document.body.classList.toggle('active-modal-checkout')
    } else {
        document.body.classList.remove('active-modal-checkout');
    }

    

  return (
    <Fragment>

        <div className='modal-checkout'>
            <div onClick={toggleModal} className='overlay-checkout'></div>
            <div className='modal-content-checkout'>
                <h1 className='checkout-title'>Checkout</h1>
                <form onSubmit={submit} className='checkout-form'>
                    <input 
                        type={'textbox'}
                        placeholder={'Card Number *'}
                        name={'cardNumber'}
                        onChange={onChange}
                        value={payment.cardNumber}
                        required
                    />
                    <input 
                        type={'textbox'}
                        placeholder={'Exp Date *'}
                        name={'expDate'}
                        onChange={onChange}
                        value={payment.expDate}
                        required
                    />
                    <input 
                        type={'textbox'}
                        placeholder={'CVV/CVV2 *'}
                        name={'cardCvv'}
                        onChange={onChange}
                        value={payment.cardCvv}
                        required
                    />
                    <input 
                        type={'password'}
                        placeholder={'Card Pin *'}
                        name={'cardPin'}
                        onChange={onChange}
                        value={payment.cardPin}
                        required
                    />
                        <button>Make Payment</button>
                    </form>          
                </div>
        </div>
    </Fragment>
  )
}

export default Checkout