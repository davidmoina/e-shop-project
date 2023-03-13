import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { CartContext } from '../../context/CartContext/CartContext';
import { db } from '../../Firebase/config';
import { generateOrder } from '../../services/generateOrder';
import styles from './checkoutForm.module.scss'

const CheckoutForm = () => {  
  const { setValue,register, formState: {errors}, handleSubmit, watch} = useForm();

  const { productsCart, total, clearCart } = useContext(CartContext);
  const { actualUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const onSubmit  = async ({name, lastName, email, country, address, postcode, city, terms}) => {
    const idToast = toast.loading("please wait...");

    const order = generateOrder(
      name,
      lastName,
      email,
      country,
      address,
      postcode,
      city,
      terms,
      productsCart,
      total
    );

    try {
      // Add a new document with a generated id.
      await addDoc(collection(db, "orders"), order);

      productsCart.forEach(async (productInCart) => {
        const productModified = doc(db, "products", productInCart.id);
        const productSnap = await getDoc(productModified);
        
        await updateDoc(productModified, {
          stock: productSnap.data().stock - productInCart.quantity
        });
      });
      toast.update(idToast, { render: "Order send successfully", type: "success", isLoading: false, autoClose: 5000, position: "top-center"});
      clearCart();
    } catch (error) {
      toast.update(idToast, { render: "An error has ocurred", type: "error", isLoading: false, autoClose: 5000, position: "top-center"});
    }

    navigate("/cart");
    
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <h3 className={styles.largeItem}>Contact information</h3>
          <div>
            <label>Name</label>
            <input type="text" {...register("name", {required: true, value: actualUser.displayName})} placeholder='Enter your name'/>
            {errors.name?.type === "required" && <p className={styles.errorMsg}>This field is required.</p>}
          </div>

          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" {...register("lastName", {required: true})} placeholder='Enter your last name'/>
            {errors.lastName?.type === "required" && <p className={styles.errorMsg}>This field is required.</p>}
          </div>

          <div className={styles.largeItem}>
            <label htmlFor="email">Email</label>
            <input type="email" {...register("email", {required: true, value: actualUser.email, pattern: /\S+@\S+\.\S+/ })} placeholder='Enter your email'/>
            {errors.email?.type === "pattern" && <p className={styles.errorMsg}>Email is wrong</p>}
          </div>

          <h3 className={styles.largeItem}>Shipping address</h3>
          <div className={styles.largeItem}>
            <label htmlFor="address">Address</label>
            <input type="text" {...register("address", {required: true})} placeholder='Enter your address'/>
            {errors.address?.type === "required" && <p className={styles.errorMsg}>This field is required.</p>}
          </div>

          <div className={styles.littleDiv}>
            <label htmlFor="city">City</label>
            <input type="text" {...register("city", {required: true})} placeholder='Enter city'/>
            {errors.city?.type === "required" && <p className={styles.errorMsg}>This field is required.</p>}
            
          </div>

          <div className={styles.littleDiv}>
            <label htmlFor="country">Country</label>
            <select name="country" {...register("country")}>
              <option value="spain">Spain</option>
              <option value="argentina">Argentina</option>
              <option value="eeuu">EEUU</option>
            </select>
          </div>

          <div className={styles.littleDiv}>
            <label htmlFor="postcode">Postal code</label>
            <input type="number" {...register("postcode", {required: true})} placeholder='Enter your postal code'/>
            {errors.postcode?.type === "required" && <p className={styles.errorMsg}>This field is required.</p>}
          </div>

          <div className={styles.checkBoxDiv}>
            <label htmlFor="terms">
              <input className={styles.checkBox} type="checkbox" {...register("terms", {required: true})} />
              I agree the Terms and Conditions.
            </label>
            {errors.terms?.type === "required" && <p className={styles.errorMsg}>Please accept the terms to continue</p>}
          </div>

          <button className={styles.btnCheckout} type='submit'>Confirm purchase</button>
        </form>
  )
}

export default CheckoutForm