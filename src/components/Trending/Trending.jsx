import styles from './trending.module.scss';
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';

const trending = () => {
  return (
    <div className={styles.trendingContainer}>
      <h3>Trending</h3>
      <div className={styles.firstDiv}>
        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="" />
        <span><Link to="/detail/d60BwNPFv06BxkiysXQF">Shop <EastIcon/></Link></span>
      </div>
      <div className={styles.secondDiv}>
        <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="" />
        <span><Link to="/detail/pgGXPvjsDv4seieS1rqM">Shop <EastIcon/></Link></span>
      </div>
      <div className={styles.thirdDiv}>
        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="" />
        <span>
          <Link to="/detail/qjjiAkgGPGv5byuxxSV4">Shop <EastIcon/></Link></span>
      </div>
    </div>
  )
}

export default trending