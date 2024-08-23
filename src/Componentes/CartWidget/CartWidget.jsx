import React from 'react'
import { CartContext } from '../../Context/CartContext'
import { CiShoppingCart } from 'react-icons/ci'
import { Link } from 'react-router-dom'


const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext)

    return (
        <Link to="/cart" className="cart-widget">
            <CiShoppingCart />
            {cartQuantity > 0 && <span>{cartQuantity}</span>}
        </Link>
    )
}

export default CartWidget