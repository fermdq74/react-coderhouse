import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../services/products.js";

const ItemListContainer = ( {greetingMsg} ) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        getProducts()
            .then( result => {
                setProducts(result.products)
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log('Promise resolved');
                setIsLoading(false);
            });
    }, []);
    
    return (
        <div className='container'>
            <h1>{greetingMsg}</h1>
            <ItemList 
                products={products}
                isLoading={isLoading}
            />
        </div>
    )

}

export default ItemListContainer;