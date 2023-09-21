import { collection, addDoc, getFirestore, serverTimestamp} from "firebase/firestore";

// Create a new order
export const createOrder = (orden) => {

    const db = getFirestore(); 
    const ordersCollection = collection(db, "orders");
  
    return addDoc(ordersCollection, orden);

};

export const setOrderTimestamp = () => {
    return serverTimestamp()
}