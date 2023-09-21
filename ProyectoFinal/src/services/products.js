
import { doc, getDoc, collection, getDocs, query, where, getFirestore} from "firebase/firestore";

// Get products listings
// Set to all categories by default
export const getProducts = (category = 'all') => {

    return new Promise( (resolve, reject) => {

        const db = getFirestore();
        let q = ''; 

        if (category === 'all') {
            q = query(collection(db, "products")) 
        } else {
            q = query(
                collection(db, "products"),
                where("categoryId", "==", category)
            )
        };

        getDocs(q)
            .then( (snapshot) => {
                if (snapshot.size === 0) {
                    console.log('No se encontraron resultados');
                }
                const products = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(products);

            })
            .catch((error) => {
                reject(error);
            });

    });

}

// Get single product
export const getItem = ( id ) => {

    return new Promise( (resolve, reject) => {

        const db = getFirestore();
    
        const itemDoc = doc(db, "products", id);
    
        getDoc(itemDoc)
          .then((doc) => {
            if (doc.exists()) {
              resolve({ id: doc.id, ...doc.data() });
            } else {
              resolve(null);
            }
          })
          .catch((error) => {
            reject(error);
          });

    });

}

// Get all products categories
export const getCategories = () => {

    return new Promise( (resolve, reject) => {

        const db = getFirestore();
        const q = query(collection(db, "categories")); 

        getDocs(q)
            .then( (snapshot) => {
                if (snapshot.size === 0) {
                    console.log('No se encontraron resultados');
                }
                const categories = snapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                });
                resolve(categories);

            })
            .catch((error) => {
                reject(error);
            });

    });

}

// Get single category details
export const getCategory = ( id ) => {

      return new Promise( (resolve, reject) => {

        const db = getFirestore();
    
        const q = query(
                    collection(db, "categories"),
                    where("id", "==", id)
                )

        getDocs(q)
          .then( (snapshot) => {
              if (snapshot.size === 0) {
                  console.log('No se encontraron resultados');
              }
              const category = snapshot.docs.map((doc) => {
                  return { id: doc.id, ...doc.data() };
              });
              resolve(category);

          })
          .catch((error) => {
              reject(error);
          });
          
    });

}

