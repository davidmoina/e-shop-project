import React from 'react';
import styles from './signinbutton.module.scss';

const SignInButton = ({handleGoSignInPage, mobile}) => {
    return (
        <button onClick={handleGoSignInPage} className={`${styles.signButton} ${mobile && styles.hideBtn}`}>Sign In</button>
    )
}

export default SignInButton