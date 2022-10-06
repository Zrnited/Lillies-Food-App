import React from 'react';
import '../cssfiles/modal.css'


const Modal = ({name, desc, price, overlay, close, imagesrc, decreasecounter, increasecounter, count, addCart}) => {

    
    
  return (
    <div className='modal'>
        <div onClick={overlay} className='overlay'></div>
        <div className='modal-content'>
            
            <img alt='food-img' src={imagesrc}/>
            <h1>{name}</h1>
            <p className='description'>{desc}</p>
            <div className='food-infos'>
                <p>{price}</p>
                <p>10-20 Mins</p>
                <p>10 Pcs Avail</p>
            </div>
            <div className='food-number-details'>
                <div className='food-number'>
                    <button onClick={decreasecounter}>-</button>
                    <p>{count}</p>
                    <button onClick={increasecounter}>+</button>
                </div>
                <button className='addcart-btn' onClick={addCart}>Add to cart</button>
            </div>
            <button className='close-btn' onClick={close}>CLOSE</button>
        </div>
    </div>
  )
}

export default Modal