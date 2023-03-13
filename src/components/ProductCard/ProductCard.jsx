import React, { useContext } from 'react';
import styles from './card.module.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { CartContext } from '../../context/CartContext/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductCard = ({prod}) => {

    const {onAdd} =  useContext(CartContext);

    const addProduct = () => {
        const newProduct = {...prod, quantity: 1};
        onAdd(newProduct);
        toast.success("Added to cart", { autoClose: 2000})
    }

    const navigate = useNavigate();

    const {image, title, price} = prod;

    const handleNavigate = () => {
        navigate(`/detail/${prod.id}`)
    }
    
    return (
        <div className={styles.cardContainer}>
            <img src={image} alt={title} onClick={handleNavigate}/>
            <div className={styles.infoDiv}>
                <h5>{title}</h5>
                <div className={styles.cardFooter}>
                    <p>{price.toFixed(2)}€</p>
                    <button onClick={addProduct}><ShoppingBasketIcon/></button>
                </div>
            </div>
        </div>  
    )
}

export default ProductCard