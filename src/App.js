import React, { useEffect } from 'react'
import './App.css'
import Homescreen from './screens/Homescreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './screens/Login'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectUser } from './features/userSlice'

function App() {
  const user = useSelector(selectUser)

  const auth = getAuth()

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(login({ uid: authUser.uid, email: authUser.email }))
      } else {
        dispatch(logout)
      }
    })
    return unsubscribe
  }, [auth, dispatch])

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/" element={<Homescreen />} />
          </Routes>
        )}
      </Router>
    </div>
  )
}

export default App
