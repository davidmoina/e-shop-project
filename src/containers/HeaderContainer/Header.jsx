import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavLeft from '../../components/NavLeft/NavLeft';
import NavRight from '../../components/NavRight/NavRight';
import styles from './header.module.scss';
import SignInButton from '../../components/SignInButton/SignInButton';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  const { actualUser, logout } = useContext(AuthContext);

  const navigate = useNavigate()

  const menuResponsive = () => {
    setMenuActive(!menuActive)
  }

  const handleGoSignInPage = () => {
		navigate("login")
	}

  const handleLogout = async () => {
		try {
			await logout()
			navigate("/")
		} catch (error) {
			console.log(error.message);
		}
	}

  console.log(menuActive);

  return (
    <div className={styles.allContainer}>
      <header className={`${styles.header} ${menuActive && styles.responsiveNav}`}>
        <div className={styles.desktopNav}>
          <NavLeft/>
          <NavRight menuResponsive={menuResponsive} menuActive={menuActive} />
        </div>
        <div className={styles.mobileMenu}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/cart"> Cart</Link></li>
          </ul>
          <div className={styles.userInfo}>
            {actualUser?.displayName
            ? (
              <>
              <div>

              
              <p className={styles.userName}>{actualUser?.displayName} </p>
              {actualUser?.photoURL 
              ? <img src={actualUser.photoURL} alt="" /> 
              : <span className={styles.userImage}><AccountCircleIcon className={styles.userImage} fontSize="inherit"/></span>}
              </div>
              
              <button className={styles.btnLogout} onClick={handleLogout}>Logout</button>
              </>
              )
            :(
              <>
              <SignInButton handleGoSignInPage={handleGoSignInPage}/>
              </>
            )}
            </div>
        </div>
      </header>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Header