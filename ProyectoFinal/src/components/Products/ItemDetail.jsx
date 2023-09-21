import PropTypes from "prop-types";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ item, isLoading }) => {

    if (isLoading) {
        return <p>Cargando...</p>;
    }
    
    if (!item) {
        return <h1>Producto no encontrado</h1>;
    }    

    return (
        <div>
            <div className="item-detail">
                <h3 className="card-title">{item.title}</h3>
                <img src={item.pictureUrl} className="d-block mx-auto" alt={item.title} />
                <div>       
                    <p className="card-text">{item.description}</p>
                    <p><strong>${item.price}</strong></p>
                    <p>Stock disponible: {item.stock}</p>
                    <ItemCount
                        item={item}
                        initial={1} 
                    />
                    <NavLink to="/cart" className="btn btn-link mt-2">Ir al carro de compras</NavLink>
                </div>
            </div>
        </div>
    )
}

ItemDetail.propTypes = {
    item: PropTypes.object,
    isLoading: PropTypes.bool,
}

export default ItemDetail;