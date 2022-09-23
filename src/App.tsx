import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useAuthState,useSignInWithGoogle } from "react-firebase-hooks/auth"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from './lib/firebase'

const auth = getAuth(app)

function App() {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  }

  const [user, loading, error] = useAuthState(auth);
  return (
    <div>
      {user ? JSON.stringify(user) : <button className='bg-red-400' onClick={signInWithGoogle}>Sign In</button>}
    </div>
  )
}

export default App
