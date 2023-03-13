import React, { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SignInButton from "../SignInButton/SignInButton";
import styles from  './navright.module.scss';
import CartWidget from "../CartWidget/CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import { useFetch } from "../../Api/useFetch";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavRight = () => {

	const navigate = useNavigate();

	const handleGoSignInPage = () => {
		navigate("login")
	}

	const { actualUser, logout } = useContext(AuthContext);

	const { data } = useFetch("https://fakestoreapi.com/products");

	const handleLogout = async () => {
		try {
			await logout()
			navigate("/")
			console.log("logged out")
		} catch (error) {
			console.log(error.message);
		}
	}

	console.log(actualUser)

	return(
	<nav className={styles.navRight}>
		<ul className="navList">
			<SearchInput data={data}/>
			<CartWidget/>
			<li className={styles.menuIcon}><MenuIcon fontSize="large"/></li>
		</ul>
		<div className={styles.divButton}>
			{actualUser?.displayName
			? (
				<>
				<p className={styles.userName}>{actualUser?.displayName} </p>
				{actualUser?.photoURL 
				? <img src={actualUser.photoURL} alt="" /> 
				: <span className={styles.userImage}><AccountCircleIcon className={styles.userImage} fontSize="inherit"/></span>}
				
				
				<button className={styles.btnLogout} onClick={handleLogout}>Logout</button>
				</>
				)
			:(
				<>
				<SignInButton handleGoSignInPage={handleGoSignInPage}/>
				</>
			)}
		</div>
	</nav>
	);
};

export default NavRight;
