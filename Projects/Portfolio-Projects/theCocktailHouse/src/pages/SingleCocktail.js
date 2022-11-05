import React from "react"
import Loading from "../components/Loading"
import { useParams, Link } from "react-router-dom"
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="

const SingleCocktail = () => {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    const getCocktail = async () => {
      try {
        const response = await fetch(`${url}${id}`)
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
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
          <span>No cocktail to display!</span>
        </div>
      </div>
    )
  }

  const { name, image, category, info, glass, instructions, ingredients } =
    cocktail
  return (
    <section>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content flex-col lg:flex-row'>
          <img
            src={image}
            className='max-w-sm rounded-lg shadow-2xl'
            alt={name}
          />
          <div>
            <h1 className='text-5xl font-bold mb-4'>{name}</h1>
            <p>
              <span className='btn btn-sm mx-4 mb-2'>Name:</span>
              {name}
            </p>
            <p>
              <span className='btn btn-sm mx-4 mb-2'>Category:</span>
              {category}
            </p>
            <p>
              <span className='btn btn-sm mx-4 mb-2'>Info:</span>
              {info}
            </p>
            <p>
              <span className='btn btn-sm mx-4 mb-2'>Glass:</span>
              {glass}
            </p>
            <p>
              <span className='btn btn-sm mx-4 mb-2 '>Instructions:</span>
              {instructions}
            </p>
            <p>
              <span className='btn btn-sm mx-4 mb-2 mt-4'>Ingredients:</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}>{item}</span> : null
              })}
            </p>
            <Link to='/'>
              <button className='btn btn-outline mx-4 mt-4'>Back home</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
