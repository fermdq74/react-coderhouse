import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProductsByCategory } from "../../services/products.js";

const ItemListContainer = ( {category = '' } ) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);
        
        getProductsByCategory(category)
            .then( result => {
                setProducts(result.products)
            }).catch((error) => {
                console.log(error);
            }).finally(() => {
                console.log('Promise resolved');
                setIsLoading(false);
            });
    }, [category]);

    return (

            <ItemList 
                products={products}
                isLoading={isLoading}
            />

    )

}

export default ItemListContainer;