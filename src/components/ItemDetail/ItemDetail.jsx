import React, { useState } from 'react'
import styles from './itemDetail.module.scss';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ItemDetail = ({prodDetail}) => {

  const [favorite, setFavorite] = useState(false);

  const {image, title, price, description, category} = prodDetail;

  const handleFavorite = () => {
    setFavorite(!favorite)
  }

  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <p>Products / {category} / <strong>{title}</strong> </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="title" />
      </div>
      <div className={styles.detailsContainer}>
        <h3>{title}</h3>
        <h4>{price}€</h4>
        <div className={styles.starsDiv}>
          <StarIcon fontSize='inherit'/>
          <StarIcon fontSize='inherit'/>
          <StarIcon fontSize='inherit'/>
          <StarIcon fontSize='inherit'/>
          <StarHalfIcon fontSize='inherit'/>
        </div>
        <p>{description}.</p>
        <div className={styles.colorsDiv}>
          <h4>Colors: </h4>
          <CircleIcon color='primary' fontSize='inherit'/>
          <CircleIcon color='secondary' fontSize='inherit'/>
          <CircleIcon color='disabled' fontSize='inherit'/>
        </div>
        <div className={styles.btnContainer}>
          <button className={styles.btnAddCart}>Add to cart</button>
          <span onClick={() => handleFavorite()}>
            {favorite ? <FavoriteIcon fontSize='large'/> : <FavoriteBorderIcon fontSize='large'/>}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail