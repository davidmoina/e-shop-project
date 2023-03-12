import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateCurrentUser,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth, db } from '../../Firebase/config';
import { getDoc } from 'firebase/firestore';

const AuthProvider = ({children}) => {
  const [actualUser, setActualUser] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      setActualUser(currentUSer);
    });
    
    return () => unsubscribe();
  }, [])
  
  const createUser = (email, password, name) => {
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => (
    updateProfile(auth.currentUser, {
        displayName: name
      })
    ))
    .finally(() => (setLoading(false)));
  }

  const logout = () => {
    setActualUser(null)
    signOut(auth)
  }

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
  }

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  }
  
  return (
    <AuthContext.Provider value={{createUser, actualUser, logout, loading, login, loginWithGoogle}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;