import { useState, useEffect } from "react";
//import ItemList from "./ItemList";
import { getItem } from "../../services/products.js";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ( {id} ) => {

    const [item, setItem] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getItem(id)
            .then(res => {
                setItem(res.product);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false);
                console.log("Promise completed");
            })
    }, [])

    if (isLoading) {
        return <p>Cargando...</p>;
    }
    
    if (!item) {
        return <h1>Producto no encontrado</h1>;
    }

    return (
        <ItemDetail 
            item={item}
            isLoading={isLoading}
        />
    )

};

export default ItemDetailContainer;
