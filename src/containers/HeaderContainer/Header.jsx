import React, { useContext, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import NavLeft from '../../components/NavLeft/NavLeft';
import NavRight from '../../components/NavRight/NavRight';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import styles from './header.module.scss';
import SignInButton from '../../components/SignInButton/SignInButton';

const Header = () => {

  const [menuMobile, setMenuMobile] = useState(false);

  const { actualUser, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleClickMenu = () => {
    setMenuMobile(!menuMobile);
  }

  const handleGoSignInPage = () => {
		navigate("login")
	}

  const handleLogout = async () => {
		try {
			await logout()
			navigate("/")
      handleClickMenu()
		} catch (error) {
			console.log(error.message);
		}
	}

  return (
    <div className={styles.allContainer}>
      <header className={`${styles.header} ${menuMobile && styles.mobile}`}>
          <NavLeft/>
          <NavRight handleClickMenu={handleClickMenu}/>
      </header>
      <div className={`${styles.mobileNav} ${menuMobile && styles.expanded}`}>
        <ul>
          <li onClick={handleClickMenu}><Link to="/">Home</Link></li>
          <li onClick={handleClickMenu}><Link to="/products">Products</Link></li>
        </ul>
        {actualUser 
        ? <button onClick={handleLogout}>Logout</button>
        : <SignInButton handleGoSignInPage={handleGoSignInPage}/>
          }
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Header