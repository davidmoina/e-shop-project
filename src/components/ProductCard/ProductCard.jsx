import React from 'react';
import styles from './card.module.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const ProductCard = ({prod, onAdd}) => {

    const {image, title, price} = prod;
    
    return (
        <div className={styles.cardContainer}>
            <img src={image}/>
            <div className={styles.infoDiv}>
                <h5>{title}</h5>
                <div className={styles.cardFooter}>
                    <p>{price.toFixed(2)}€</p>
                    <button onClick={() => onAdd(prod)}><ShoppingBasketIcon/></button>
                </div>
            </div>
        </div>  
    )
}

export default ProductCard