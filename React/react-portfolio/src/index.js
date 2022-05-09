import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <Router>
    <App />
  </Router>
)

const toggle = document.querySelector('.hover-show')

toggle.addEventListener('click', () => {
  toggle.classList.toggle('active')
})

let Icons = document.querySelectorAll('.navigation .icon')

Icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    changeactive()

    icon.classList.add('active-nav')
  })
})

function changeactive() {
  Icons.forEach((icon) => {
    icon.classList.remove('active-nav')
  })
}
