import './App.css'
import { useEffect, useState, useRef, useLayoutEffect } from 'react'

function App() {
  const inputRef = useRef(null)
  useLayoutEffect(() => {
    // inputRef.current.value = 'Hello'
  }, [])

  useEffect(() => {
    inputRef.current.value = 'Hello'
  }, [])
  return (
    <div className='App'>
      <input ref={inputRef} value='Pedro' />
    </div>
  )
}

// useRef
// function App() {
//   const inputRef = useRef(null)
//   const [name, setName] = useState('Name')
//   const onClick = () => {
//     inputRef.current.value = ''
//     inputRef.current.focus()
//     setName(inputRef.current.value)
//   }
//   return (
//     <div>
//       <h2>{name}</h2>
//       <input type='text' placeholder='enter something here' ref={inputRef} />
//       <button onClick={onClick}>Change Name</button>
//     </div>
//   )
// }

// UseEffect
// function App() {
//   const [data, setData] = useState('')

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/comments')
//       .then((response) => {
//         setData(response.data[0].email)
//       })
//   }, [])

//   return <div>The Data is {data}</div>
// }

// import { useReducer } from 'react'
// UseReducer
// const initialState = { count: 0 }

// function reducer(state, action) {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1 }
//     default:
//       throw new Error()
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState)
//   return (
//     <div>
//       Count : {state.count}
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//     </div>
//   )
// }

export default App
