import React from 'react';

const Receipt = ({ cart, amountPaid }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const change = amountPaid - totalPrice;

  return (
    <div className="receipt-container">
      <h2>Receipt</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Price: ${totalPrice}</h3>
      <h3>Amount Paid: ${amountPaid}</h3>
      <h3>Change: ${change < 0 ? 0 : change}</h3>
      {amountPaid >= totalPrice ? (
        <p>Thank you for your purchase!</p>
      ) : (
        <p>Payment was not successful.</p>
      )}
    </div>
  );
};

export default Receipt;