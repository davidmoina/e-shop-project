import styles from './customLoader.module.scss'

const CustomLoader = () => {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <span className={styles.loaderText}>loading</span>
        <span className={styles.load}></span>
      </div>
    </div>

  )
}

export default CustomLoader