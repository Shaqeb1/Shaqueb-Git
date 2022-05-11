import React from 'react'
import Accordion from './components/Accordion'

const items = [
  {
    title: 'What is react?',
    content: 'React is a javascript framework',
  },
  {
    title: 'Why use react?',
    content: 'React is a favorite JS library among engineers',
  },
  {
    title: 'How to you use react?',
    content: 'you use react by creating components',
  },
]

function App() {
  return (
    <div>
      <Accordion items={items} />
    </div>
  )
}

export default App
