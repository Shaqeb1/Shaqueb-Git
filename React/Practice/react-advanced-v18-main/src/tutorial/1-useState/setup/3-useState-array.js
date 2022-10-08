import React, { useState } from "react"
import { data } from "../../../data"

const UseStateArray = () => {
  const handleClick = () => {
    if (people === data) {
      setPeople([])
      setButton("Recover Items")
    } else {
      setPeople(data)
      setButton("Clear Items")
    }
  }
  const [people, setPeople] = useState(data)
  const [button, setButton] = useState("Clear Items")
  return (
    <>
      {people.map(person => {
        const { id, name } = person
        return (
          <div
            className='item'
            key={id}
          >
            <h4>{name}</h4>
          </div>
        )
      })}
      <button
        className='btn'
        onClick={handleClick}
      >
        {button}
      </button>
    </>
  )
}

export default UseStateArray
