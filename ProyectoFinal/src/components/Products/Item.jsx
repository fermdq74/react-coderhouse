import ItemCount from "./ItemCount";

const Item = ({ id, title, description, price, pictureUrl }) => {

    return (
        <div className="card item">
            <img src={pictureUrl} className="class=card-img-top" alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{description}</p>
                <p>${price}</p>
                <ItemCount
                    stock={5}
                    initial={1} 
                />
            </div>
        </div>
    )
}

export default Item