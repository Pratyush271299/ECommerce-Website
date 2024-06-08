import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [promocode,setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [discountedTotal, setDiscountedTotal] = useState(0);
    const [menu, setMenu] = useState("shop");


    
    const [cartItems, setCartItems] = useState(getDefaultCart)

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
    } 

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = all_product.find((product)=>{ return product.id === Number(item)})
                totalAmount+=(itemInfo.new_price *cartItems[item] - discount);
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                totalItems+=cartItems[item]
            }
        }
        return totalItems;
    }
    
    const contextValue = {menu, setMenu, all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, promocode, discountedTotal, setPromoCode, setDiscount, setDiscountedTotal};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
