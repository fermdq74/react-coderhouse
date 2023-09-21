import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/Products/ItemListContainer";
import { getCategory } from "../services/products";

const ItemList = () => {

    const { id } = useParams();
    const [category, setCategory] = useState(id);

    useEffect(() => {

        getCategory(id)
            .then(res => {
                setCategory(res);
            })
            .catch( (err) => {
                console.log(err);
                setCategory(null);
            })

    }, [id])

    return (
        <div className='container'>
            <h1 className='mb-4 text-center'>Listado de productos de { category[0].name }</h1>
            <ItemListContainer category={ category[0].id } />
        </div>
    )

}

export default ItemList