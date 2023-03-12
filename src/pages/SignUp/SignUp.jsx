import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockIcon from '@mui/icons-material/Lock';
import styles from './singUp.module.scss'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { onAuthStateChanged, updateProfile } from 'firebase/auth';
import { auth } from '../../Firebase/config';
import BtnLoginGoogle from '../../components/BtnLoginGoogle/BtnLoginGoogle';

const SignUp = () => {

  const navigate = useNavigate();
  const {register, formState: {errors}, handleSubmit, watch} = useForm();
  const {createUser} = useContext(AuthContext);

  const handleLogin = () => {
    navigate('/login')
  }

  const onSubmit  = async ({email, password, name}) => {
    try {
      await createUser(email, password, name);

    } catch (error) {
      console.log(error)
    }

    navigate("/")
  }

  return (
    <div className={styles.supContainer}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
        {/* <div className={styles.logoContainer}></div> */}
        <div className={styles.titleContainer}>
          <p className={styles.title}>Sign up to create your Account</p>
          <span className={styles.subtitle}>Get started with our app, just create an account and enjoy the experience.</span>
        </div>
        <br/>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >First name</label>
          <PermIdentityIcon className={styles.icon}/>
          <input placeholder="Enter your first name"  {...register("name", {required: true})} type="text" className={styles.inputField}/>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Last name</label>
          <PermIdentityIcon className={styles.icon}/>
          <input placeholder="Enter your last name"  {...register("lastName", {required: true})} type="text" className={styles.inputField}  />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Email</label>
          <MailOutlineIcon className={styles.icon}/>
          <input placeholder="name@mail.com"  {...register("email", {required: true, pattern: /\S+@\S+\.\S+/ })} type="text" className={styles.inputField} />
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Password</label>
          <LockIcon className={styles.icon} />
          <input placeholder="Password" {...register("password", {required: true})} type="password" className={styles.inputField} id="password_field"/>
        </div>
        <div className={styles.inputContainer}>
          <label className={styles.inputLabel} >Confirm password</label>
          <LockIcon className={styles.icon} />
          <input placeholder="Password" {...register("confirmPassword", {required: true})} type="password" className={styles.inputField}/>
        </div>
        <button title="Sign In" type="submit" className={styles.signInBtn}>
          <span>Sign Up</span>
        </button>

        <div className={styles.separator}>
          <hr className={styles.line}/>
          <span>Or</span>
          <hr className={styles.line}/>
        </div>
        <BtnLoginGoogle/>
        <p onClick={handleLogin} className={styles.note}>Have an account? <strong>Log in</strong></p>
      </form>
    </div>
  )
}

export default SignUp