import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../Firebase/config';

const useFirebase = (category, productId) => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {

    (async() =>{
      try {
        setLoading(true);
        if(productId) {
          const docRef = doc(db, "products", productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setData({id: docSnap.id, ...docSnap.data()});
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } else {

          const q = category ? query(collection(db, "products"), where("category", "==", category)) : query(collection(db, "products"));
  
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
    
  }, [category, productId])
  

  return {loading, data, error};
}

export default useFirebase