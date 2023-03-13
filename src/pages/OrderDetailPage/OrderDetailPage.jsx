import styles from './orderDetailPage.module.scss'
import CreditCardIcon from '@mui/icons-material/CreditCard';
import useGetOrders from '../../hooks/useGetOrders';
import { Navigate, useParams } from 'react-router-dom';
import ProductOrderShipped from '../../components/ProductOrderShipped/ProductOrderShipped';
import CustomLoader from '../../components/CustomLoader/CustomLoader';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const OrderDetailPage = () => {

  const { actualUser } = useContext(AuthContext);

  if(!actualUser) {
    return <Navigate to="/"/>
  }
  
  const { orderId } = useParams();

  const { data, loading } = useGetOrders(orderId);

  return (
    <main className={styles.orderDetailContainer}>
      {loading 
      ? <CustomLoader/>
      : 
      (
        <>
        <section className={styles.ordersNumContainer}>
          <p>Thank you!</p>
          <h2>Order shipped!</h2>
          <p>Your order #{data?.orderNum} has been sent and will arrive soon.</p>
          <p>Tracking number</p>
          <p>{data?.trackingNum}</p>
        </section>

        <section className={styles.orderContainer}>

          <div className={styles.products}>
          {data?.items.map(item => (
              <ProductOrderShipped key={item.id} product={item}/>
            ))}
          </div>

          <div className={styles.addressContainer}>
            <div>
              <h4>Shipping address</h4>
              <p>{data?.buyer?.address}</p>
            </div>
            <div>
              <h4>Billing address</h4>
              <p>{data?.buyer?.address}</p>
            </div>
          </div>
          <div className={styles.paymentContainer}>
            <div>
              <h4>Payment method</h4>
              <div className={styles.cardData}>
                <CreditCardIcon className={styles.cardIcon}/>
                <span className={styles.cardNum}>Visa: 1234</span>
                <span className={styles.cardExpiry}>Expiry: 06/2026</span>
              </div>
            </div>
            <div>
              <h4>Shipping method</h4>
              <span>Best Courier</span>
              <span>Between 1-2 working days</span>
            </div>
          </div>
          <div className={styles.pricingContainer}>
            <div>
              <span>Subtotal</span>
              <span>{data?.pricing?.subtotal}€</span>
            </div>
            <div>
              <span>Shipping estimate</span>
              <span>{data?.pricing?.shipping}€</span>
            </div>
            <div>
              <span>Tax estimate</span>
              <span>{data?.pricing?.tax}€</span>
            </div>
            <div>
              <span>Order Total</span>
              <span>{data?.pricing?.total}€</span>
            </div>
          </div>
        </section>
        </>
      )}
    </main>
  )
}

export default OrderDetailPage