import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {
    const { cart, cartQuantity, cartTotal, removeFromCart, clearCart } = useContext(CartContext);

    if (cart.length === 0) {
        return <h2>Carrito vacío</h2>
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.map((item) => (
                <div key={item.id}>
                    <p>{item.nombre}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: {item.precio}</p>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total de productos: {cartQuantity}</h3>
            <h3>Total a pagar: ${cartTotal}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
