import React, { useState } from "react"

const UseStateBasics = () => {
  const handleClick = () => {
    if (text === "random title") {
      setText("Hello World")
    } else {
      setText("random title")
    }
  }
  const [text, setText] = useState("random title")
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button
        className='btn'
        onClick={handleClick}
      >
        Change Title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
