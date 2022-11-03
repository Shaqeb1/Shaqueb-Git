import { useState, useEffect } from "react"
import axios from "axios"

const url = "https://icanhazdadjoke.com/"
// Accept : 'application/json'

const Headers = () => {
  const [joke, setJoke] = useState("random dad joke")

  const fetchDadJoke = async () => {
    const response = await axios(url, {
      Accept: "application/json",
    })
    const data = response.data
    setJoke(data)
    console.log(response)
  }

  return (
    <section className='section text-center'>
      <button
        className='btn'
        onClick={fetchDadJoke}
      >
        Random Joke
      </button>
      <p className='dad-joke'>{joke}</p>
    </section>
  )
}
export default Headers
