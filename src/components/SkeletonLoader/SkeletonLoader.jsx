import React from 'react'
import styles from './skeletonLoader.module.scss'

const SkeletonLoader = () => {
  return (
    <div class={styles.card}>
      <div class={styles.cardLoad}></div>
      <div class={styles.cardLoadExtremeTitle}></div>
      <div class={styles.cardLoadExtremeDescription}></div>
    </div>
  )
}

export default SkeletonLoader