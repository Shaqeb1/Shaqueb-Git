import React, { useState } from "react"
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
  }
  return (
    <>
      <article>
        <form
          className='form'
          onSubmit={handleSubmit}
        >
          <div className='form-control'>
            <label htmlFor='firstName'>Name: </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor='email'>Email: </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button className='btn'>Add Person</button>
        </form>
      </article>
    </>
  )
}

export default ControlledInputs
