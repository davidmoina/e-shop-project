import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import { auth } from '../../Firebase/config';
import { toast } from 'react-toastify';

const AuthProvider = ({children}) => {
  const [actualUser, setActualUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUSer) => {
      setActualUser(currentUSer);
    });
    
    return () => unsubscribe();
  }, [])
  
  const createUser = async (email, password, name) => {
    setLoading(true)
    await createUserWithEmailAndPassword(auth, email, password)
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
    toast.info("Logged out", { position: "top-center"})
  }

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password)
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