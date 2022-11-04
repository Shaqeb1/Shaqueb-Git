import React from "react"
import Cocktail from "./Cocktail"
import Loading from "./Loading"
import { useGlobalContext } from "../context"

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()

  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <div className='alert alert-error shadow-lg flex items-center justify-center h-48 mt-20'>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          <span>No cocktails found!</span>
        </div>
      </div>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map(item => {
          return (
            <Cocktail
              key={item.id}
              {...item}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CocktailList
