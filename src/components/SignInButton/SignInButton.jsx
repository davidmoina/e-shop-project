import React from 'react';
import styles from './signinbutton.module.scss';

const SignInButton = ({handleGoSignInPage}) => {
    return (
        <button onClick={handleGoSignInPage} className={styles.signButton}>Sign In</button>
    )
}

export default SignInButton