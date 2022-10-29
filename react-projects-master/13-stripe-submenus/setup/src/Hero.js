import React from "react"
import { useGlobalContext } from "./context"
import phoneImg from "./images/phone.svg"

const Hero = () => {
  const { closeSubmenu } = useGlobalContext()

  return (
    <section
      className='hero'
      onMouseOver={closeSubmenu}
    >
      <div className='hero-center'>
        <article className='hero-info'>
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Millions of companies of all sizes-form startups to fortune 500s-use
            Stripe's software and Api's to accept payments, send payouts, and
            manage their business online.
          </p>
        </article>
        <article className='hero-images'>
          <img
            src={phoneImg}
            className='phone-img'
            alt='phone'
          />
        </article>
      </div>
    </section>
  )
}

export default Hero
