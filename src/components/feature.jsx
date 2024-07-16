import React from 'react'
import "../styles/features.scss";

const Feature = () => {
  return (
    <div>
      <section class="feature">
      <div class="feature__content container container--pall">
        <div class="feature__introduc">
          <h2>Why choose Easybank?</h2>
          <p>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div class="feature__gridi">
          <div class="feature__itemm">
            <div class="feature__icon">
              <img src="./assets/icon-online.svg" alt="icon-online"/>
            </div>
            <div class="feature__h2">Online Banking</div>
            <div class="feature__description">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </div>
          </div>

          <div class="feature__itemm">
            <div class="feature__icon">
              <img src="./assets/icon-budgeting.svg" alt="icon-budget"/>
            </div>
            <div class="feature__h2">Simple Budgeting</div>
            <div class="feature__description">
              See exactly where your money goes each month. Receive
              notifications when you’re close to hitting your limits.
            </div>
          </div>

          <div class="feature__itemm">
            <div class="feature__icon">
              <img src="./assets/icon-onboarding.svg" alt="icon-onboard"/>
            </div>
            <div class="feature__h2">Fast Onboarding</div>
            <div class="feature__description">
              We don’t do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </div>
          </div>

          <div class="feature__itemm">
            <div class="feature__icon"><img src="./assets/icon-api.svg" alt="icon-api"/></div>
            <div class="feature__h2">Open API</div>
            <div class="feature__description">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </div>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Feature
