import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './collectionItem.module.scss'

const CollectionItem = ({item}) => {

  console.log(item)
  return (
    <li>
      <NavLink className={({isActive}) => isActive ? `${styles.active} ${styles.link}` : `${styles.link}`} to={`/products/${item}`}>{item.toUpperCase()}</NavLink> 
    </li>
  )
}

export default CollectionItem