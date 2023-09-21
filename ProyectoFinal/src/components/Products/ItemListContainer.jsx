import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../services/products";

const ItemListContainer = ( {category = 'all' } ) => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        setIsLoading(true);

        getProducts(category)
            .then(res => {
                setProducts(res)
            })
            .catch( (err) => {
                console.log(err);
                setProducts(null);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [category]);

    return (
            <ItemList 
                products={products}
                isLoading={isLoading}
            />
    )

}

export default ItemListContainer;