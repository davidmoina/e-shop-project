import { useFetch } from '../../Api/useFetch';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const url = "https://fakestoreapi.com/products";

  const { data, loading } = useFetch(url)

  return (
    <div className={styles.productsList}>
        {data?.map(prod => {
          return <ProductCard prod={prod} key={prod.id}/>
        })}
    </div>
  )
}

export default ProductsList