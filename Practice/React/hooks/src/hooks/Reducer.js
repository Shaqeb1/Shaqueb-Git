import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return (state = 0)
    default:
      return (state = 0)
  }
}

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </>
  )
}

export default Counter
