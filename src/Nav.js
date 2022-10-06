import React, { useEffect, useState } from 'react'
import './Nav.css'
import { getAuth, signOut } from 'firebase/auth'

const Nav = () => {
  const [show, handleshow] = useState(false)

  const auth = getAuth()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleshow(true)
    } else {
      handleshow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.removeEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1600px-Logonetflix.png?20170904093427"
          alt=""
        />
        <img
          onClick={() => signOut(auth)}
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
          alt=""
        />
      </div>
    </div>
  )
}

export default Nav
