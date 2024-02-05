import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import SingleCard from '../components/SingleCard';
import { ApiContext } from '../context/ApiContext';

const Product = () => {

  const [product] = useContext(ApiContext);
  
  return (
  <div>
    <h1 className='text-center my-5'>Products</h1>
      <div className='row g-5'>
      {product.map(item=>(
        <SingleCard 
        key={item.id}
        title={item.title}
        price={item.price}
        img={item.image}
        />
      ))}
    </div>
  </div>
  )
}

export default Product