import React from 'react';
import Checkout from './Checkout';

const ViewCart = ({ cart, onRemoveItem, onCheckout }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className='cart-container'>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={item.id}>
                {item.quantity}x {item.name} - ${item.price * item.quantity} 
                <button onClick={() => onRemoveItem(index)}>Remove</button>
              </li>
            ))}
          </ul>
          <p>Total Price: ${totalPrice}</p>
          <button onClick={onCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
};

export default ViewCart;