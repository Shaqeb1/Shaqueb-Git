import React from 'react'
import Categories from '../../components/Categories/Categories'
import './Shoes.css'
import { useContext } from 'react'
import { ProductsContext } from '../../Context/ProductsContext'
import ProductCard from '../../components/ProductCard/ProductCard'

const Shoes = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div>
        <Categories/>
           <div className='products-container'>
          {products.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
    </div>
  )
}

export default Shoes