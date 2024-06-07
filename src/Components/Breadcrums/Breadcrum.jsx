import React from 'react';
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
import { Link } from 'react-router-dom';

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      <Link to={'/'} style={{textDecoration: 'none', color: 'black', transition: 'color 0.1s ease'}} onMouseEnter={e=>e.target.style.color="#ff4141"} onMouseLeave={e=>e.target.style.color="black"}>Home</Link>
      <img src={arrow_icon} alt="" />
      <Link to={`/${product.category}s`} style={{textDecoration: 'none', color: 'black', transition: 'color 0.1s ease'}} onMouseEnter={e=>e.target.style.color="#ff4141"} onMouseLeave={e=>e.target.style.color="black"}>{product.category}</Link>
      <img src={arrow_icon} alt="" />
      {product.name}
    </div>
  );
}

export default Breadcrum;
