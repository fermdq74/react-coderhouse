import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {

    return (
        <div>
            <div className="item-detail">
                <h3 className="card-title">{item.title}</h3>
                <img src={item.pictureUrl} className="d-block mx-auto" alt={item.title} />
                <div className="">       
                    <p className="card-text">{item.description}</p>
                    <p><strong>${item.price}</strong></p>
                    <p>Stock disponible: {item.stock}</p>
                    <ItemCount
                        stock={item.stock}
                        initial={1} 
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;