import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../../services/products";
import ItemDetail from "./ItemDetail";
import CartContext from "../../context/CartContext";

const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();
    const { addItem } = useContext(CartContext);

    useEffect(() => {

        getItem(id)
            .then(res => {
                setItem(res);
            })
            .catch( (err) => {
                console.log(err);
                setItem(null);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [id])

    return (
        <ItemDetail 
            item={item}
            isLoading={isLoading}
            addItem={addItem}
        />
    )

};

export default ItemDetailContainer;
