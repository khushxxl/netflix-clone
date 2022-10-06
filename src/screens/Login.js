import React, { useState } from 'react'
import './Login.css'
import SignInScreen from './SignInScreen'

const Login = () => {
  const [signIn, setSignIn] = useState()

  return (
    <div className="loginscreen">
      <div className="loginscreen__background">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png?20170904093427"
          alt=""
        />
        <button onClick={() => setSignIn(true)} className="login__btn">
          Sign In{' '}
        </button>
        <div className="login__gradient" />
      </div>

      <div className="login__body">
        {signIn ? (
          <SignInScreen />
        ) : (
          <>
            <h1>Unlimited films , TV programmes and more.</h1>
            <h2>Watch anytime. Cancel at any time</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>

            <div className="logo__input">
              <form action="">
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Login
