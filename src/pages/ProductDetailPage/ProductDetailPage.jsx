import { useParams } from 'react-router-dom';
import { useFetch } from '../../Api/useFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';
import useFirebase from '../../hooks/useFirebase';

const ProductDetailPage = () => {

  const {productId} = useParams();

  const { data, loading} = useFirebase(null, productId);

  return (
    loading ? <SkeletonLoader/> : <ItemDetail prodDetail={data} productId={productId}/>
  )
}

export default ProductDetailPage