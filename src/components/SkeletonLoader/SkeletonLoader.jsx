import React from 'react'
import styles from './skeletonLoader.module.scss'

const SkeletonLoader = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardLoad}></div>
      <div className={styles.cardLoadExtremeTitle}></div>
      <div className={styles.cardLoadExtremeDescription}></div>
    </div>
  )
}

export default SkeletonLoader