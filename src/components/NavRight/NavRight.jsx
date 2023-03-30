import React, { useContext } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import SignInButton from "../SignInButton/SignInButton";
import styles from  './navright.module.scss';
import CartWidget from "../CartWidget/CartWidget";
import SearchInput from "../SearchInput/SearchInput";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useFirebase from "../../hooks/useFirebase";

const NavRight = ({handleClickMenu}) => {

	const navigate = useNavigate();

	const handleGoSignInPage = () => {
		navigate("login")
	}

	const { actualUser, logout } = useContext(AuthContext);

	const { data } = useFirebase();

	const handleLogout = async () => {
		try {
			await logout()
			navigate("/")
		} catch (error) {
			console.log(error.message);
		}
	}

	return(
	<nav className={styles.navRight}>
		<ul className="navList">
			<li onClick={handleClickMenu} className={styles.menuIcon}><MenuIcon fontSize="large"/></li>
			<SearchInput data={data}/>
			<CartWidget/>
		</ul>
		<div className={styles.divButton}>
			{actualUser?.displayName
			? (
				<>
				<p className={styles.userName}>david moina</p>
				{actualUser?.photoURL 
				? <img src={actualUser.photoURL} alt="" /> 
				: <span className={styles.userImage}><AccountCircleIcon className={styles.userImage} fontSize="inherit"/></span>}
				
				
				<button className={styles.btnLogout} onClick={handleLogout}>Logout</button>
				</>
				)
			:(
				<>
				<SignInButton mobile={true} handleGoSignInPage={handleGoSignInPage}/>
				</>
			)}
		</div>
	</nav>
	);
};

export default NavRight;
