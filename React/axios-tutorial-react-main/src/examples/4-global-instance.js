import { useEffect } from "react"
import axios from "axios"

const productsUrl = "https://course-api.com/react-store-products"
const randomUserUrl = "https://randomuser.me/api"

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className='text-center'>Global Instance</h2>
}
export default GlobalInstance
