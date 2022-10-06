import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDgnqJLXMoqByg18E80wWZkGQpsaIiGjQs',
  authDomain: 'netflix-clone-2d18d.firebaseapp.com',
  projectId: 'netflix-clone-2d18d',
  storageBucket: 'netflix-clone-2d18d.appspot.com',
  messagingSenderId: '815372527074',
  appId: '1:815372527074:web:b4b2f599efb226668b85bb',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()

const auth = getAuth()
const provider = new GoogleAuthProvider()

export { app, db, auth, provider }
