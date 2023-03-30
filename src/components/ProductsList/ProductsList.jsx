import { useParams } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import CustomLoader from '../CustomLoader/CustomLoader';
import ProductCard from '../ProductCard/ProductCard'
import styles from './productsList.module.scss'


const ProductsList = () => {

  const { collection } = useParams();

  const { data, loading } = useFirebase(collection);

  return (
    <>
    {!(data?.length > 0 )
    ? <CustomLoader/> 
    : 
    <div className={styles.productsList}>
      {data.map((prod) => {
        return <ProductCard key={prod.id} prod={prod}/>
      })}
    </div>
    }
    
    </>
  )
}

export default ProductsList