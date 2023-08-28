import { useState } from "react";
import './style.scss'

const ItemCount = ( {stock, initial}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        if (count < stock) {
            setCount((prevCount) => prevCount + 1);
        }
    };
    
    const decrease = () => {
        if (count > 1) {
          setCount((prevCount) => prevCount - 1);
        }
    };

    return (
        <div className="item-count">
            <div className="item-count-text">Cantidad</div>
            <button onClick={decrease} className="btn btn-light"> - </button>
            <input type="text" className="item-count-number" value={count} disabled />
            <button onClick={increase} className="btn btn-light"> + </button>
            <a href="#" className="btn btn-primary mt-2">Agregar al carro</a>
        </div>
    )

}

export default ItemCount;