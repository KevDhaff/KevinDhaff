import React from 'react';

const CPUs = () => {
  const cpuList = [
    {
      name: "Intel Core i9",
      price: "$499",
      image: "https://via.placeholder.com/150?text=Intel+Core+i9",
      
    },
    {
      name: "AMD Ryzen 9",
      price: "$499",
      image: "https://pckuwait.com/wp-content/uploads/2023/05/Ryzen-9-7900X3D.jpg",
    },
    {
      name: "Intel Core i7",
      price: "$349",
      image: "https://via.placeholder.com/150?text=Intel+Core+i7",
    },
    {
      name: "AMD Ryzen 7",
      price: "$299",
      image: "https://via.placeholder.com/150?text=AMD+Ryzen+7",
    },
  ];

  return (
    <div className="cpu-list">
      <h1>Available CPUs</h1>
      <div className="product-list">
        {cpuList.map((cpu, index) => (
          <Product key={index} name={cpu.name} price={cpu.price} image={cpu.image} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ name, price, image }) => {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h2>{name}</h2>
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
};

export default CPUs;