import React from 'react';

const GPUs = () => {
  const gpuList = [
    {
      name: "Intel Core i9",
      price: "$00",
      image: "https://via.placeholder.com/150?text=Intel+Core+i9",
    },
    {
      name: "AMD Ryzen 9",
      price: "$00",
      image: "https://via.placeholder.com/150?text=AMD+Ryzen+9",
    },
    {
      name: "Intel Coresasa",
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
    <div className="gpu-list">
      <h1>Available GPUs</h1>
      <div className="product-list">
        {gpuList.map((gpu, index) => (
          <Product key={index} name={gpu.name} price={gpu.price} image={gpu.image} />
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

export default GPUs;