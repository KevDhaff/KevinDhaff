import React, { useState } from 'react';

const Checkout = ({ cart, onConfirmCheckout }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const [amountPaid, setAmountPaid] = useState('');

  const handlePayment = async () => {
    const paymentAmount = parseFloat(amountPaid);

    if (isNaN(paymentAmount) || paymentAmount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (paymentAmount < totalPrice) {
      alert("The amount paid is less than the total price. Please enter a sufficient amount.");
      return;
    }

    try {
   
      const paymentSuccess = await processPayment(paymentAmount);
      if (paymentSuccess) {
 
        onConfirmCheckout(paymentAmount);
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("An error occurred during payment. Please try again.");
    }
  };

 
  const processPayment = (amount) => {

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <input
        type="number"
        value={amountPaid}
        onChange={(e) => setAmountPaid(e.target.value)}
        placeholder="Enter amount to pay"
      />
      <button onClick={handlePayment}>Confirm Payment</button>
    </div>
  );
};

export default Checkout;