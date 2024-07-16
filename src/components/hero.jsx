import React from 'react'
import "../styles/hero.scss";


const Hero = () => {
  return (
    <div>
      <section class="hero">
      <div class="container">
        <div class="hero__imago"></div>

        <div class="hero__text container--pall">
          <h1>Next generation digital banking!!!!</h1>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <a href="/" class="button">Request Invite</a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Hero
