import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const totalPrice = cart.reduce((acc, item) => acc + (item.precio * item.quantity), 0);

    const clearCart = () => {
        setCart([]);
    };
    const addToCart = (product, quantity) => {
        // Lógica para agregar: si ya existe, sumamos cantidad; si no, lo añadimos
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item => 
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalItems, totalPrice, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};