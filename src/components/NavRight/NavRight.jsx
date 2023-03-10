import React from "react";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import SignUpButton from "../SignUpButton/SignUpButton";
import SignInButton from "../SignInButton/SignInButton";
import styles from  './navright.module.scss';
import CartWidget from "../CartWidget/CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import { useFetch } from "../../Api/useFetch";

const NavRight = () => {

	const { data } = useFetch("https://fakestoreapi.com/products");

	return(
	<nav className={styles.navRight}>
		<ul className="navList">
			{/* <li><SearchIcon style={{fontSize: 25}}/></li> */}
			<SearchInput data={data}/>
			<CartWidget/>
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
