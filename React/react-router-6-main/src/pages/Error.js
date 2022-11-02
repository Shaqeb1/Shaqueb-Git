import { Link } from "react-router-dom"

const Error = () => {
  return (
    <section className='section'>
      <h2>404</h2>
      <p>Page not found</p>
      <Link
        to='/'
        className='btn'
      >
        GO BACK TO HOME PAGE
      </Link>
    </section>
  )
}
export default Error
