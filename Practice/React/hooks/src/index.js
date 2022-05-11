import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import App from './App'
import Counter from './hooks/Reducer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
)
