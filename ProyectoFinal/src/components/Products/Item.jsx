import { Link } from "react-router-dom";

const Item = ({ id, title, description, price, pictureUrl, stock }) => {

    return (
        <div className="card item">
            <div className="card-header">
                <img src={pictureUrl} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h3 className="card-title">
                    <Link to={`/item/${id}`}>{title}</Link>
                </h3>
                <p className="card-text text-truncate">{description}</p>
                <p className="mb-0"><strong>${price}</strong></p>
            </div>
            <div className="card-footer text-body-secondary">
                Stock disponible: {stock}
            </div>
        </div>
    )
}

export default Item