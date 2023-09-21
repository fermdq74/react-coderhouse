import { useState } from 'react'
import CartContext from "./CartContext.js";
import { getCartQuantity, getCartTotal } from "../utils";

const CartProvider = ({ children }) => {

    const[cart, setCart] = useState([]);

    const addItem = (product, quantity) => {

        const itemInCart = cart.find((item) => item.id === product.id);

        if ( itemInCart ) {
            const updatedCart = cart.map(item => {
                if (( item.id === product.id ) && ( product.stock > item.quantity) && ( product.stock >= (item.quantity + quantity)) ) {
                    return {
                        ...item,
                        quantity: item.quantity + quantity,
                    }
                }
                return item;
            });
            setCart(updatedCart);
        } else {
            if ( product.stock >= quantity ) {
                setCart([...cart, { ...product, quantity }]);
            }
        }

    };

    const removeItem = (id) => {
        const newCart = cart.filter((item) => item.id !== id);
        setCart(newCart);
    };

    const clear = () => {
        setCart([]);
    };

    const isInCart = (id) => {
        const itemInCart = cart.find((item) => item.id === id);
        return !!itemInCart;
    };

    const getItemsQuantity = (cart) => {
        return getCartQuantity(cart);
    }

    const getItemsTotal = (cart) => {
        return getCartTotal(cart);
    }

    const setOrder = (cart) => {
        return cart.map((item) => ({
            id: item.id,
            quantity: item.quantity,
            price: item.price,
            title: item.title,
        }));
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clear, isInCart, getItemsQuantity, getItemsTotal, setOrder }}>
            { children }
        </CartContext.Provider>
        
    )
}

export default CartProvider;