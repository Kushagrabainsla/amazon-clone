import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://sootter.com/upload/6643intelligence-horizontal-banner-220x265_158855015884b5b0e31141839dc8aeae7ad454d0ff.png" alt="" />
                <div>
                  <h2 className="checkout__title">Your Shopping Cart</h2>
                </div>
            </div>

            <div className="checkout__right">
              <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
