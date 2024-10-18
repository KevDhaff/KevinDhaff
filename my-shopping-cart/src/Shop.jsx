import React, { useState } from "react";

export default function Shop(props) {
  let Shopitems = props.items;
  const [cart, setCart] = useState([]);

  function addItem(item) {
    setCart((c) => [...c, item]);
  }

  const renderItems = () => {
    return (
      Shopitems.map((item) => {
        return (
          <>
            <li key={item.id}>{item.name}</li>
            <p>Price per piece: ${item.price}</p>
            <button onClick={() => addItem(item)}>Add to Cart</button>
            <br />
          </>
        );
      })
    );
  };

  const renderCart = () => {
    return (
      cart.map((product) => {
        return (
          <>
            <li key={product.id}>{product.name}</li>
            <p>Price: ${product.price}</p>
            <br />
          </>
        );
      })
    );
  };

  if (props.isLoggedIn === false) {
    return <Login />;
  } else {
    return (
      <>
        <h1>This is the Shop!</h1>
        <ul>{renderItems()}</ul>
        <h4>These are the cart items:</h4>
        <ul>{renderCart()}</ul>
      </>
    );
  }
}
