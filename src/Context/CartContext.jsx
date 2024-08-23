import React, { createContext, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = (item, quantity) => {
        const itemExists = cart.find((product) => product.id === item.id)
        if (itemExists) {
            setCart(
                cart.map((product) =>
                    product.id === item.id
                        ? { ...product, quantity: product.quantity + quantity }
                        : product
                )
            )
        } else {
            setCart([...cart, { ...item, quantity }])
        }
    }

    const removeFromCart = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const clearCart = () => {
        setCart([])
    }

    const cartQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)
    const cartTotal = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0)

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeFromCart,
            clearCart,
            cartQuantity,
            cartTotal
            }}>
            {children}
        </CartContext.Provider>
    )
}