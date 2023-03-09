import React, { useEffect, useState } from 'react'
import styles from './itemCount.module.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({handleQuantity}) => {

  const [numProducts, setNumProducts] = useState(1);

  const handleAdd = () => {
    setNumProducts(numProducts + 1);
  }

  const handleRest = () => {
    if(numProducts > 1) {
      setNumProducts(numProducts - 1)
    }
  }

  useEffect(() => {
    handleQuantity(numProducts)
  }, [numProducts])

  return (
    <div className={styles.countContainer}>
      <button onClick={() => handleRest()}><RemoveIcon/></button>
      <span>{numProducts}</span>
      <button onClick={() => handleAdd()}><AddIcon/></button>
    </div>
  )
}

export default ItemCount