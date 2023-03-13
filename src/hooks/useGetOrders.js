import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../Firebase/config';

const useGetOrders = (orderId) => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    (async() =>{
      try {
        setLoading(true);

        if(orderId) {
          const docRef = doc(db, "orders", orderId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setData({id: docSnap.id, ...docSnap.data()});
            // console.log(docSnap.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } else {
          const q = query(collection(db, "orders"));

          const querySnapshot = await getDocs(q);
          const productsFirebase = [];

          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            productsFirebase.push({id: doc.id, ...doc.data()})
          });

          setData(productsFirebase);
        }

      } catch (error) {
        setError(error);
      }

      setLoading(false);
    })();
  }, [])
  

  return {loading, data, error};
}

export default useGetOrders