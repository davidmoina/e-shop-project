import React from 'react'
import styles from './itemDetail.module.scss';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import CircleIcon from '@mui/icons-material/Circle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ItemDetail = ({prodDetail}) => {

  const {image, title, price, description, category} = prodDetail;

  return (
    <div className={styles.container}>
      <div className={styles.path}>
        <p>Products / {category} / {title}</p>
      </div>
      <div className={styles.imageContainer}>
        <img src={image} alt="title" />
      </div>
      <div className={styles.detailsContainer}>
        <h4>{title}</h4>
        <h5>{price}€</h5>
        <div>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarIcon/>
          <StarHalfIcon/>
        </div>
        <p>{description}</p>
        <div>
          <h5>Colors: </h5>
          <CircleIcon color='primary' fontSize='large'/>
          <CircleIcon color='secondary' fontSize='large'/>
          <CircleIcon color='disabled' fontSize='large'/>
        </div>
        <div>
          <button>Add to cart</button>
          <FavoriteBorderIcon fontSize='large'/>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail