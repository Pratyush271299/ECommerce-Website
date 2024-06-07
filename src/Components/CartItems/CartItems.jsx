import React, { useContext, useState } from 'react';
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {
    const {all_product, cartItems, removeFromCart, getTotalCartAmount, promocode,discount, discountedTotal, setPromoCode, setDiscount, setDiscountedTotal} = useContext(ShopContext);

    const handleInputChange = e => {
        setPromoCode(e.target.value);
    }
    const handleButtonClick = e => {
        const total = getTotalCartAmount();
        if (promocode === 'discount50') {
            alert('PROMO CODE HAS BEEN ENTERED!');
            setDiscount(50);
            const discountedAmount = total - discount;
            setDiscountedTotal(discountedAmount);
            setPromoCode('')
        }
    }

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map(e => {
        if(cartItems[e.id]>0) {
            return (
                    <div>
                        <div className="cartitems-format cartitems-format-main">
                        <img src={e.image} alt="" className='carticon-product-icon'/>
                        <p>{e.name}</p>
                        <p>${e.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                        <p>${e.new_price* cartItems[e.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                    </div>
        <hr />
      </div>
            )
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>{getTotalCartAmount() >= 500 ? 'Free' : getTotalCartAmount() > 0 ? '$10' : '$0'}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>
                        ${((discountedTotal || getTotalCartAmount() < 500) && (discountedTotal || getTotalCartAmount() > 0)) ? (discountedTotal || getTotalCartAmount()) + 10 
                        : (discountedTotal || getTotalCartAmount()) >= 500 ? (discountedTotal || getTotalCartAmount()) : 0 } 
                    </h3>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='promo code' value={promocode} onChange={handleInputChange}/>
                <button onClick={handleButtonClick}>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
