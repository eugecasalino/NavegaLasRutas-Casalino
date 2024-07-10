import React from 'react';
import { CiShoppingCart } from "react-icons/ci";


const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <span>0</span>
      <CiShoppingCart />
    </div>
  );
}

export default CartWidget;
