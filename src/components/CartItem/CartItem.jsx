import React, { useContext } from 'react'
import styles from './cartItem.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import { CartContext } from '../../context/CartContext/CartContext';

const CartItem = ({product}) => {

  const {image, price, quantity, title} = product;

  const { onDelete } = useContext(CartContext);

  return (
    <div className={styles.itemContainer}>
      <img src={image}  />
      <div className={styles.infoContainer}>
        <div className={styles.productDetailsCart}>
          <h4>{title}</h4>
          <span>{price}€</span>
          <span>{quantity}</span>
          <span onClick={() => onDelete(product)} className={styles.closeSpan}><CloseIcon/></span>
        </div>
        <p className={styles.stockP}><span><CheckIcon/></span> In stock</p>
      </div>
    </div>
  )
}

export default CartItem