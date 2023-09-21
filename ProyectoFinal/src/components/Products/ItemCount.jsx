import { useState, useContext } from "react";
import './style.scss';
import CartContext from "../../context/CartContext";

const ItemCount = ( {item, initial}) => {

    const [count, setCount] = useState(initial);

    const { addItem } = useContext(CartContext);

    const increase = () => {
        if (count < item.stock) {
            setCount((prevCount) => prevCount + 1);
        }
    };
    
    const decrease = () => {
        if (count > 1) {
          setCount((prevCount) => prevCount - 1);
        }
    };

    const handleChange = ( event ) => {
        if ( count <= item.stock ) {
            setCount(event.target.value);
        }
    };

    const handleKeyDown = (event) => {
        const numbers = "0123456789";
        if ((!numbers.includes(event.key)) && ( event.target.value >= item.stock )) {
            event.preventDefault();
        }
    };

    const handleAddToCart = ( event ) => {
        if ( count <= item.stock ) {
            addItem(item, count)
        }
    };

    return (
        <div className="item-count">
            <div className="item-count-text mb-1">Cantidad</div>
            <button onClick={decrease} className="btn btn-light"> - </button>
            <input type="text" className="item-count-number" value={count} onChange={handleChange} onKeyDown={handleKeyDown} />
            <button onClick={increase} className="btn btn-light"> + </button>
            <button onClick={handleAddToCart} className="btn btn-primary mx-2">Agregar al carro</button>
        </div>
    )

}

export default ItemCount;