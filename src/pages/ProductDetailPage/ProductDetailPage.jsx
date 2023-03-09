import { useParams } from 'react-router-dom';
import { useFetch } from '../../Api/useFetch';
import ItemDetail from '../../components/ItemDetail/ItemDetail'
import SkeletonLoader from '../../components/SkeletonLoader/SkeletonLoader';

const ProductDetailPage = () => {

  const {productId} = useParams();

  const url = "https://fakestoreapi.com/products/";

  const { data, loading } = useFetch(url + productId);

  return (
    loading ? <SkeletonLoader/> : <ItemDetail prodDetail={data} productId={productId}/>
  )
}

export default ProductDetailPage