import React from "react"
import { useGlobalContext } from "../context"

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef("")
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <div
      className='flex items-center justify-center mt-10'
      style={{ fontFamily: "Pacifico" }}
    >
      <input
        type='text'
        placeholder='Search Your Favorite Cocktail!'
        className='input input-bordered input-error w-full max-w-xs'
        ref={searchValue}
        onChange={searchCocktail}
      />
    </div>
  )
}

export default SearchForm
