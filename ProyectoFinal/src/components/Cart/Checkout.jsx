import { useState, useContext } from 'react'
import CartContext from "../../context/CartContext.js";
import { createOrder, setOrderTimestamp } from "../../services/cart";


const Checkout = () => {

    const [orderId, setOrderId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { cart, getItemsTotal, setOrder, clear } = useContext(CartContext);
    const [formState, setFormState] = useState({
        name: "",
        surname: "",
        email: "",
        phone: ""
    });

    const { name, surname, email, phone } = formState;
    const cartTotal = getItemsTotal(cart);

    const onChange = (event) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value,
        });
    };

    const isFormValid = name && surname && email && phone;

    const handleCheckout = () => {

        const order = {
            buyer: {
                name: name,
                surname: surname,
                phone: phone,
                email: email,
            },
            items: setOrder(cart),
            total: cartTotal,
            date: setOrderTimestamp(),
        };
            
        setIsLoading(true);
        createOrder(order).then((docRef) => {
            setOrderId(docRef.id);
            setIsLoading(false);
            clear();
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();
        handleCheckout();
    };

    return (
        <div className='container'>
            { orderId && 
            <div className="row">
                <div className="col-md-6 text-center mx-auto">
                    <h2 className="h2 mb-5">¡Tu orden ha sido enviada!</h2>
                    <p>Este es tu código de seguimiento: {orderId}</p>
                    <p>¡Muchas gracias!</p>
                </div>
            </div>
            }

            { !orderId && 
            <div className="row">
                <div className="col-md-6">
                    
                    <h1 className="h2 text-center mb-5">Enviar orden de compra</h1>
                    <p className="fs-5 mb-4"><strong>Completa el siguiente formulario:</strong></p>
                    <form onSubmit={onSubmit}>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" name="name" id="name" className="form-control" onChange={onChange} />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="surname" className="form-label">Apellido</label>
                                <input type="text" name="surname" id="surname" className="form-control" onChange={onChange} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" className="form-control" onChange={onChange} />    
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phone" className="form-label">Teléfono</label>
                                <input type="text" name="phone" id="phone" className="form-control" onChange={onChange} />
                            </div>
                        </div>
                        <div className="mt-4 text-center">
                            <button type="submit" disabled={!isFormValid} className="btn btn-primary">Enviar</button>
                        </div>
                    </form>
                    {isLoading && <p>Procesando compra...</p>}
                </div>
                <div className="col-md-4 mx-auto">
                    <h4>Resumen de la compra</h4>
                    <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <p><strong>{item.title}</strong><br />
                            Cantidad: {item.quantity}<br />
                            Subtotal: ${item.price * item.quantity}</p>
                            <hr />
                        </li>
                    ))}
                    </ul>
                    <h5 className="mb-4 text-end">Total: ${cartTotal}</h5>
                </div>
            </div> 
            }   
        </div>
    )
}

export default Checkout
