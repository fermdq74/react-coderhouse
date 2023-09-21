import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { NavLink } from "react-router-dom";

const Cart = () => {

    const { cart, addItem, removeItem, getItemsQuantity, getItemsTotal, clear } = useContext(CartContext);

    const cartCount = getItemsQuantity(cart);
    const cartTotal = getItemsTotal(cart);
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 mx-auto">
                    <h1 className="h2 text-center mb-5">Productos en el carro</h1>
                        {cart.map((item) => (
                        <div key={item.id} className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-9">
                                        <h3 className="card-title">{item.title}</h3>
                                        <h5>${item.price}</h5>
                                        <h6>Total: ${item.price * item.quantity}</h6>
                                    </div>
                                    <div className="col-md-3 d-flex align-items-center">
                                        <div className="d-flex flex-column">
                                            <h5>Cantidad: {item.quantity}</h5>
                                            <div className="text-start">
                                                <button
                                                    onClick={() => addItem(item, 1)}
                                                    className="btn btn-link w-100 p-0 text-start"
                                                >
                                                    Agregar otra unidad
                                                </button>
                                                <button
                                                    onClick={() => removeItem(item.id)}
                                                    className="btn btn-link w-100 p-0 text-start"
                                                >
                                                    Quitar del carro
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                        {cartCount > 0 &&
                        <div className="float-end text-end">
                            <h5 className="mb-4">Total: ${cartTotal}</h5>
                            <NavLink to={'/checkout'} className="btn btn-success text-uppercase float-right d-block">Finalizar compra</NavLink>
                            <button onClick={clear} className="btn btn-link">Vaciar carrito</button>
                        </div>
                        }
                        {cartCount == 0 &&
                            <>
                                <p className="alert alert-warning">No existen productos en el carro.</p>
                                <NavLink to={'/'} className="btn btn-link">Seguir comprando</NavLink>
                            </>
                        }

                </div>
            </div>
        </div>
    )
}

export default Cart;