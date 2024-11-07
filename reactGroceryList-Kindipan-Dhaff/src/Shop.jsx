import React, { useState } from 'react';
import Checkout from './Checkout';
import ViewCart from './ViewCart';
import Receipt from './Receipt';

const Shop = () => {
  const items = [
    { id: 1, name: "Grapes", price: 50 },
    { id: 2, name: "Orange", price: 20 },
    { id: 3, name: "Kiwi", price: 40 },
    { id: 4, name: "Banana", price: 15 },
    { id: 5, name: "Cucumber", price: 25 },
  ];

  const [cart, setCart] = useState([]);
  const [viewingCart, setViewingCart] = useState(false);
  const [viewingCheckout, setViewingCheckout] = useState(false);
  const [viewingReceipt, setViewingReceipt] = useState(false);
  const [amountPaid, setAmountPaid] = useState(0);

  const addToCart = (item) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
  };

  const updateCartItemQuantity = (index, quantityChange) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity += quantityChange;

      if (updatedCart[index].quantity <= 0) {
        updatedCart.splice(index, 1);
      }

      return updatedCart;
    });
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add items to your cart before checking out.");
      return;
    }
    setViewingCheckout(true);
    setViewingCart(false);
  };

  const confirmCheckout = () => {
    setViewingCheckout(false);
    setViewingReceipt(true);
  };

  const handlePayment = (amount) => {
    setAmountPaid(amount);
    confirmCheckout();
  };

  const toggleCartView = () => {
    setViewingCart(!viewingCart);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Shop</h1>
      <button onClick={toggleCartView}>
        {viewingCart ? 'Continue Shopping' : 'View Cart'}
      </button>

      {viewingReceipt ? (
        <Receipt cart={cart} amountPaid={amountPaid} totalPrice={totalPrice} />
      ) : viewingCheckout ? (
        <div className="checkout">
          <Checkout cart={cart} onConfirmCheckout={handlePayment} />
        </div>
      ) : viewingCart ? (
        <div className="cart">
          <ViewCart cart={cart} onUpdateQuantity={updateCartItemQuantity} onCheckout={handleCheckout} />
        </div>
      ) : (
        <div>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => addToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Shop;