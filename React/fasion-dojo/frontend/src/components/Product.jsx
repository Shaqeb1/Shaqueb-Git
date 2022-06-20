import React from 'react'
import Rating from './Rating'

const Product = ({product}) => {
  return (
   <>
   <div className='card w-auto shadow-xl bg-slate-300 backdrop-filter backdrop-blur-lg bg-opacity-30'>
    <a href="link">
    <figure className='px-4 pt-4'>
     <img src={product.image} alt={product.description}/>
    </figure>
    </a>
    
      <div className='card-body items-center text-center'>
        <a href="link"><h2 className='card-title'>{product.name}</h2></a>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        <div className='card-title'>
          <p>{product.price}$</p>
        </div>
        <div className='card-action'>
          <button className='btn btn-primary'>Buy Now</button>
        </div>
      </div>
    </div>
   </>
  )
}

export default Product