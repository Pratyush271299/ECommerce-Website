import React, { useState } from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleEmailChange = e => {
    setEmail(e.target.value);
  }

  const handleButtonClick = () => {
    const regex = /[\w]+@[a-z]+\.[a-z]+/;
    if (regex.test(email)) {
      alert('THANK YOU FOR SUBSCRIBING!');
      setIsSubscribed(true);
      setEmail('')
    }
    else alert('Please Enter Valid Email Address!')
  }

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers on Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder='Your Email Id' value={email} onChange={handleEmailChange}/>
        <button onClick={handleButtonClick} className={isSubscribed ? `subscribed` : `subscribe`} disabled={isSubscribed}>{isSubscribed?'Subscribed!':'Subscribe'}</button>
      </div>
    </div>
  );
}

export default NewsLetter;
