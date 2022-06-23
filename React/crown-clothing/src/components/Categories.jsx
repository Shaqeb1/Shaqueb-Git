import React from 'react'
import Shoes from '../assets/images/shoes.jpg'
import Shirts from '../assets/images/shirt.jpg'
import Men from '../assets/images/men.jpg'
import Women from '../assets/images/women.jpg'

const Categories = () => {
  return (
    <>
    <div className='carousel w-5/6 m-auto h-fit'>
      <div id='slide1' className='flex items-center justify-center carousel-item relative w-full'>
        <img src={Shoes} alt="" className='w-full' />
        <button className='absolute flex bottom-2 w-xl btn btn-ghost text-3xl'
        >Shoes</button>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide4' className='btn btn-circle'>❮</a>
            <a href="#slide2" className='btn btn-circle'>❯</a>
        </div>
      </div>
      <div id='slide2' className='flex items-center justify-center carousel-item relative w-full'>
        <img src={Shirts} alt="" className='w-full' />
        <button className='absolute flex bottom-2 w-xl btn btn-ghost text-3xl text-white'
        >Shirts</button>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide1' className='btn btn-circle'>❮</a>
            <a href="#slide3" className='btn btn-circle'>❯</a>
        </div>
      </div>
      <div id='slide3' className='flex items-center justify-center carousel-item relative w-full'>
        <img src={Men} alt="" className='w-full' />
        <button className='absolute flex bottom-2 w-xl btn btn-ghost text-3xl'
        >Men</button>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide2' className='btn btn-circle'>❮</a>
            <a href="#slide4" className='btn btn-circle'>❯</a>
        </div>
      </div>
      <div id='slide4' className='flex items-center justify-center carousel-item relative w-full'>
        <img src={Women} alt="" className='w-full' />
        <button className='absolute flex bottom-2 w-xl btn btn-ghost text-3xl'
        >Women</button>
        <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
            <a href='#slide3' className='btn btn-circle'>❮</a>
            <a href="#slide1" className='btn btn-circle'>❯</a>
        </div>
      </div>
    </div>
    </>
  )
}

export default Categories