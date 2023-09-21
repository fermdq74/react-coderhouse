export const getCartQuantity = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity, 0)
};
  
export const getCartTotal = (cart) => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
};
