import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SignUpButton from "../SignUpButton/SignUpButton";
import SignInButton from "../SignInButton/SignInButton";
import styles from  './navright.module.scss';

const NavRight = () => {
	return(
	<nav className={styles.navRight}>
		<ul className="navList">
			<li><SearchIcon fontSize="large"/></li>
			<li><ShoppingBasketIcon fontSize="large"/></li>
			<li className={styles.menuIcon}><MenuIcon fontSize="large"/></li>
		</ul>
		<div className={styles.divButton}>
			<SignUpButton/>
			<SignInButton/>
		</div>
	</nav>
	);
};

export default NavRight;
