import React from "react"
import { Link } from "react-router-dom"

const Cocktail = ({ image, name, id, info, glass, instructions }) => {
  return (
    <div
      className='rounded overflow-hidden shadow-lg'
      style={{ fontFamily: "Poppins" }}
    >
      <img
        className='w-full h-fit'
        src={image}
        alt={name}
      />
      <div className='px-6 py-4'>
        <div className='font-bold text-xl mb-2'>{name}</div>
        <p className='text-gray-700 text-base'>{instructions}</p>
      </div>
      <div className='px-6 pt-4 pb-2'>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {info}
        </span>
        <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
          {glass}
        </span>
        <Link
          to={`/cocktail/${id}`}
          className='btn btn-outline btn-sm'
        >
          Details
        </Link>
      </div>
    </div>
  )
}

export default Cocktail
