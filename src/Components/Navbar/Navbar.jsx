import React, { useContext, useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useLocation } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const{getTotalCartItems} = useContext(ShopContext);
    const location = useLocation();
    const isCartPage = location.pathname === '/cart';

  return (
    <div className='navbar'> 
      <div className="nav-logo">
        <Link to={'/'}><img onClick={() => {setMenu('shop')}} src={logo} alt=''/></Link>
        <p>Shopper</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={() => {setMenu('home')}}><Link to='/' style={{textDecoration: 'none', color: 'black'}}>Home</Link> {menu==='home'? <hr /> : <></>} </li>
        <li onClick={() => {setMenu('mens')}}><Link to='/mens' style={{textDecoration: 'none', color: 'black'}}>Men</Link> {menu==='mens'? <hr /> : <></>} </li>
        <li onClick={() => {setMenu('womens')}}><Link to='/womens' style={{textDecoration: 'none',color: 'black'}}>Women</Link> {menu==='womens'? <hr /> : <></>} </li>
        <li onClick={() => {setMenu('kids')}}><Link to='/kids' style={{textDecoration: 'none', color: 'black'}}>Kids</Link> {menu==='kids'? <hr /> : <></>} </li>
      </ul>
      <div className='nav-login-cart'>
        <Link to={'/login'}><button>Login</button></Link>
        <Link to={'/cart'}><img className={isCartPage? 'cart-icon-active':''} src={cart_icon} alt =''/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div> 
    </div>
  );
}

export default Navbar;