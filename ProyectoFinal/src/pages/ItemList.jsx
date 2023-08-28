import { useParams } from "react-router-dom";
import ItemListContainer from "../components/Products/ItemListContainer";
import { getCategory } from "../services/products";

const ItemList = () => {

    const { id } = useParams();
    const category = getCategory(id);

    return (
        <div className='container'>
            <h1>Listado de productos de { category[0].name }</h1>
            <ItemListContainer className='mt-2' category={ category[0].slug } />
        </div>
    )

}

export default ItemList