import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl, stock }) => {

    return (
        <div className="card item">
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h3 className="card-title">
                    <Link to={`/item/${id}`}>{title}</Link>
                </h3>
                <p className="card-text">{description}</p>
                <p>${price}</p>
                <p>Stock disponible: {stock}</p>
                <ItemCount
                    stock={stock}
                    initial={1} 
                />
            </div>
        </div>
    )
}

export default Item