import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import CustomLoader from '../CustomLoader/CustomLoader';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const { collection } = useParams();

  const { data } = useFirebase(collection);

  return (
    <>
    {!data 
    ? <CustomLoader/> 
    : 
    <div className={styles.productsList}>
      {data?.map(prod => {
        return <ProductCard prod={prod} key={prod.id}/>
      })}
    </div>
    }
    
    </>
  )
}

export default ProductsList