import React, { useRef } from 'react'
import { auth } from '../features/firebase'
import './SignInScreen.css'

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

const SignInScreen = () => {
  const emailRef = useRef(null)
  const passwordRef = useRef(null)

  const register = (e) => {
    e.preventDefault()

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((e) => alert(e.message))
  }

  const signin = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value,
    )
      .then((authUser) => {
        console.log(authUser)
      })
      .catch((e) => alert(e.message))
  }

  return (
    <div className="signInScreen">
      <form action="">
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button onClick={signin}>Sign In</button>
        <button onClick={register}>Register Now</button>

        <h4>
          <span className="signin__gray">New to Netflix?</span>
          <span className="signupbtn" onClick={register}>
            <br /> Click on register if you coming here for first time!
          </span>
        </h4>
      </form>
    </div>
  )
}

export default SignInScreen
