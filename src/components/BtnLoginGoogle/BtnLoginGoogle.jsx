import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import styles from './btnLoginGoogle.module.scss'
import GoogleIcon from '@mui/icons-material/Google';

const BtnLoginGoogle = () => {

  const { loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleOnClick = async() => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <button onClick={handleOnClick}  title="Sign In" className={styles.signInGgl}>
      <GoogleIcon/> Sign In with Google
    </button>
  )
}

export default BtnLoginGoogle