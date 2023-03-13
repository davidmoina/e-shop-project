import React, { useContext, useEffect, useState } from 'react'
import styles from './login.module.scss'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import { Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import BtnLoginGoogle from '../../components/BtnLoginGoogle/BtnLoginGoogle';
import { toast } from 'react-toastify';

const Login = () => {
  
  const { login, actualUser } = useContext(AuthContext);
  const {register, formState: {errors}, handleSubmit, watch} = useForm();
  const navigate = useNavigate();

  if(actualUser) {
    return <Navigate to={-1}/>
  }

  const onSubmit = ({email, password}) => {
    
    login(email, password)
    .then(() => {
      navigate("/")
      toast.success("Logged successfully", { position: "top-center", autoClose: 3000})
    })
    .catch(() => {
      toast.warning("An error has ocurred, please try again", { position: "top-center"})
    });
  }

  const handleSingUp = () => {
    navigate('/signup')
  }

  

  return (
    <div className={styles.supContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        <div className={styles.titleContainer}>
          <p className={styles.title}>Log in to your Account</p>
          <span className={styles.subtitle}>Get started with our app, just create an account and enjoy the experience.</span>
        </div>
        <br/>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Email</label>
          <MailOutlineIcon className={styles.icon}/>
          <input placeholder="name@mail.com"  {...register("email", {required: true, pattern: /\S+@\S+\.\S+/ })} type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Password</label>
          
          <LockIcon className={styles.icon} />
          <input placeholder="Password"  {...register("password", {required: true})} type="password" className={styles.inputField}/>
        </div>
        <button title="Sign In" type="submit" className={styles.signInBtn}>
          <span>Sign In</span>
        </button>

        <div className={styles.separator}>
          <hr className={styles.line}/>
          <span>Or</span>
          <hr className={styles.line}/>
        </div>
        <BtnLoginGoogle/>
        
        <p onClick={handleSingUp} className={styles.note}>Don't have an account? <strong>Sign up</strong></p>
      </form>
    </div>
    

  )
}

export default Login