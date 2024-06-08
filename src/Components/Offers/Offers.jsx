import React, {useContext} from 'react';
import './Offers.css';
import exclusive_image from '../Assets/exclusive_image.png'
import { ShopContext } from '../../Context/ShopContext';
import { Link } from 'react-router-dom';

const Offers = () => {
  const {menu, setMenu} = useContext(ShopContext);
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <Link to={'/latestcollections'} style={{textDecoration: 'none', color: 'white'}}>
          <button onClick={() => {setMenu('latestcollections')}}>Check Now</button>
        </Link>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
}

export default Offers;
