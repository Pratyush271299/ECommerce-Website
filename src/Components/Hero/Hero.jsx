import React, { useContext } from 'react';
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Hero = () => {
  const {menu, setMenu} = useContext(ShopContext);
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY!</h2>
        <div>
            <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt='' />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
      <Link to={'/latestcollections'} style={{textDecoration: 'none', color: 'white'}}>
        <div onClick={() => {setMenu('latestcollections')}} className="hero-latest-btn">
          <div>latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </Link>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;