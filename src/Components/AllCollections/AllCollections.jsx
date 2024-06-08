import React from 'react';
import './AllCollections.css'
import all_product from '../Assets/all_product';
import Item from '../Item/Item';

const AllCollections = () => {
    const shuffledProducts = [...all_product].sort(()=> Math.random() - 0.5);
  return (
    <div className='allcollections'>
      <h1>LATEST COLLECTIONS!</h1>
      <hr />
      <div className="allcollections-items">
        {shuffledProducts.map((item, i) => {
            return (<Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price}
            />)
        })}
      </div>
    </div>
  );
}

export default AllCollections;
