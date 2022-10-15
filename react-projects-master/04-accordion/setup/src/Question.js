import React, { useState } from "react"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const handleClick = () => {
    setShowInfo(!showInfo)
  }
  return (
    <>
      <article className='question'>
        <header>
          <h4>{title}</h4>
          <button
            onClick={handleClick}
            className='btn'
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{showInfo && info}</p>
      </article>
    </>
  )
}

export default Question
