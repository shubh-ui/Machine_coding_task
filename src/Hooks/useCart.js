import { useState } from "react";

export const useCart = (initialState = []) => {
    // Ensure initialState is an array
    const [cartItems, setCartItems] = useState(Array.isArray(initialState) ? initialState : []);

    const addItemToCart = (item) => {
        setCartItems(prev => {
            console.log("Previous cartItems state:", prev);
            const exist = prev.find(i => i.id === item.id);
            console.log("Does item exist in cart?:", exist)
            if (exist) {
                const updated = prev.map(i => 
                    i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                );
                console.log("Updated cartItems state after incrementing quantity:", updated);
                return updated
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeItemFromCart = (itemId) => {
        setCartItems(prev => prev.filter(i => i.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    console.log(cartItems)
    return { cartItems, addItemToCart, removeItemFromCart, clearCart };
};
