import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Roccat Vulcan II',
    description: 'The ROCCAT Vulcan II keyboards are wired mechanical models designed primarily for gaming. These keyboards use ROCCAT TITAN II OPTICAL switches and have full RGB lighting backlighting for each key.',
    price: 123,
    image: 'https://www.popzara.com/wp-content/uploads/2019/11/roccat_vulcan2019_feature.jpg',
    switches: 'Roccat Titan II Optical',
    materials: "The top plate is made of aluminum, but the rest of the keyboard's chassis is plastic.",
    connection: '1x USB 2.0',
    keycaps: 'ABS',
  },
  {
    id: 2,
    name: 'Keychron Q1 HE',
    description: "Meet the Q1 HE, the world's first 75% layout wireless QMK custom keyboard equipped with Hall Effect Gateron 2.0 magnetic switches. These switches provide a distinct advantage due to their unique mechanism, offering faster feedback, dynamic rapid triggering, and adjustable actuation points, resulting in epic enhancements for the gaming experience tailored to your individual preferences.",
    price: 140,
    image: 'https://imboldn.com/wp-content/uploads/2023/12/Keychron-Q1-HE-Wireless-QMK-Custom-Magnetic-Switch-Keyboard-main.jpg',
    switches: 'Gateron Magnetic Jade',
    materials: '6063 aluminum alloy',
    connection: ' Bluetooth and 2.4GHz (USB dongle) connectivity ',
    keycaps: 'OSA PBT Keycaps',
  },
  {
    id: 3,
    name: 'Asus ROG Azoth',
    description: 'The Asus Rog Azoth is an outstanding gaming keyboard that boasts some very advanced features and design, with hotswappable and pre-lubricated mechanical switches, effective absorption foams and a dedicated settings wheel.',
    price: 133,
    image: 'https://th.bing.com/th/id/OIP.J65uV1OpN65x6cll_CcT6QHaEK?w=292&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    switches: 'linear NX Red, NX Snow, or clicky NX Blue.',
    materials: 'CNC-Machined Anodized Aluminum',
    connection: 'Tri-mode connection: Use Bluetooth to connect and switch between three devices at a time, ROG SpeedNova wireless technology provides up to 2,000+ hours of low-latency gameplay in 2.4 GHz RF wireless mode (OLED & RGB off), or use standard wired USB',
    keycaps: 'PBT doubleshot keycaps',
  },
  {
    id: 4,
    name: 'Asus ROG Falchion RX LP',
    description: 'ROG Falchion RX Low Profile 65% compact wireless gaming keyboard with ROG RX low-profile optical switches, tri-mode connection with ROG SpeedNova wireless technology and Omni Receiver, protective cover, integrated silicone dampening foam, interactive touch panel, and MacOS support.',
    price: 140,
    image: 'https://www.trustedreviews.com/wp-content/uploads/sites/54/2024/01/Asus-ROG-Falchion-RX-Low-Profile-2-scaled.jpg',
    switches: 'Pre-lubed RX Red and Blue switches',
    materials: 'Plastic',
    connection: 'Tri-mode connection:  Connect via Bluetooth (up to three devices simultaneously), 2.4 GHz with ROG SpeedNova wireless technology, or wired USB',
    keycaps: 'PBT doubleshot keycaps',
  },
  {
    id: 5,
    name: 'Corsair K65 Plus Wireless',
    description: 'The Corsair K65 PLUS WIRELESS is a 75% gaming keyboard with pre-lubricated Corsair MLX Red v2 linear switches that make each keystroke silky smooth and responsive.',
    price: 95,
    image: 'https://files.pccasegear.com/images/CH-91D471E-NA-thumb.jpg',
    switches: 'Corsair Red MLX Linear',
    materials: 'Polycarbonate',
    connection: 'Wireless Gaming Keyboard',
    keycaps: 'PBT keycaps',
  },
  {
    id: 6,
    name: 'G.Skill KM250 RGB',
    description: 'The G.SKILL KM250 RGB mechanical keyboard features a compact 65% layout (67-key) with RGB backlighting (controllable via function hotkey combinations), hot-swappable keyswitches, volume control knob, 2-stage standoff, and comes with a detachable, braided USB Type-C cable.',
    price: 80,
    image: 'https://thinkcomputers.org/wp-content/uploads/2023/07/gskill-km250-rgb-2.jpg',
    switches: ' Kailh Red',
    materials: 'Plastic',
    connection: 'USB Type-C',
    keycaps: 'PBT dual-injection pudding',
  },
  {
    id: 7,
    name: 'HyperX Alloy Origins Core',
    description: 'The HyperX Alloy Origins Core is an ultra-compact, sturdy tenkeyless keyboard featuring custom HyperX mechanical switches designed to give gamers the best blend of style, performance, and reliability.',
    price: 100,
    image: 'https://media.karousell.com/media/photos/products/2022/1/30/hyperx_alloy_origins_core_rgb__1643555639_0b906d08_progressive.jpg',
    switches: 'HyperX Red Linear, HX Aqua Tactile, or HX Blue Clicky',
    materials: 'Full aircraft-grade aluminum body',
    connection: ' USB-C cable',
    keycaps: 'PBT keycaps',
  },
  {
    id: 8,
    name: 'SteelSeries Apex Pro',
    description: 'The Steel Series Apex Pro offers gamers a highly customizable keyboard at a competitive price. From its adjustable palm rest to its impressive macro capabilities, late-night game night on discord has never felt easier.',
    price: 180,
    image: 'https://m.media-amazon.com/images/I/71aDZGDOwlL._AC_SL1500_.jpg',
    switches: 'Omnipoint Adjustable linear, Omnipoint Linear',
    materials: 'plastic bottom case and an aircraft grade aluminum top cover',
    connection: 'USB-A cable, USB passthrough port',
    keycaps: 'ABS',
  },
  {
    id: 9,
    name: 'Asus ROG Strix Scope II',
    description: "An excellent gaming keyboard. With a solid construction and premium feel, hot-swappable design, an impressive battery life, it's a hard keyboard to fault.",
    price: 150,
    image: 'https://dlcdnwebimgs.asus.com.cn/files/media/04A569F9-5A7D-43E2-AC3F-92F0710EDFD0/v1/img/kv.jpg',
    switches: ' Pre-lubed NX Snow linear switches and ROG NX Storm clicky',
    materials: 'Hard Plastic',
    connection: 'Tri-mode connection: Connect using Bluetooth (up to three devices), 2.4 GHz with ROG SpeedNova wireless technology (up to 1500 hours of battery life) or wired USB',
    keycaps: 'PBT doubleshot keycaps',
  },
  {
    id: 10,
    name: 'Razer Huntsman V3 Pro',
    description: 'Instantly elevate your play with the champ of esports gaming keyboards—the Razer Huntsman V3 Pro. Supercharged by Rapid Trigger Mode.',
    price: 220,
    image: 'https://cdn.mos.cms.futurecdn.net/VyzZSHtscgWQW9jquSERrZ.jpg',
    switches: 'Razer Analog Optical Gen-2 Switches',
    materials: 'Brushed Aluminum',
    connection: 'Detachable USB-C',
    keycaps: 'PBT doubleshot keycaps',
  },
  {
    id: 11,
    name: 'Azio Retro Classic artisan',
    description: "The Azio Retro Classic is a contemporary take on a vintage typewriter. It's built with Kailh keys that have tactile and clicky feedback as well as LED backlighting, which lets you type in dimly lit and dark environments.",
    price: 145,
    image: 'https://lanoc.org/images/reviews/2017/azio_retro_classic/image_6.jpg',
    switches: 'tactile and modestly clicky',
    materials: 'body is made of plastic but the frame that surrounds the keyboard is solid aluminum alloy',
    connection: 'Wireless bluetooth and USB-C',
    keycaps: 'Round typewriter-style keycaps',
  },
  {
    id: 12,
    name: 'Logitech ERGO K860 Wireless Ergonomic',
    description: 'A split ergonomic keyboard designed for better posture, less strain, and more support. You’ll type more naturally with a curved, split keyframe that improves typing posture.',
    price: 180,
    image: 'https://th.bing.com/th/id/OIP.Io-CVbPy_73d8X1xyBkNmAHaEZ?w=295&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7',
    switches: 'Scissor switches',
    materials: 'Plastic',
    connection: 'Bluetooth',
    keycaps: 'Chiclet-style keycaps',
  },
   
];

const ProductList = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleBack = () => {
    setSelectedProduct(0);
  };

  if (selectedProduct) {
    return (
      <div className="product-detail">
        <h2>{selectedProduct.name}</h2>
        <img src={selectedProduct.image} alt={selectedProduct.name} />
        <p><strong>Description: </strong>{selectedProduct.description}</p>
        <p><strong >Price: $</strong>{selectedProduct.price}</p>
        <p><strong>Switches: </strong>{selectedProduct.switches}</p>
        <p><strong>Materials: </strong>{selectedProduct.materials}</p>
        <p><strong>Connection: </strong>{selectedProduct.connection}</p>
        <p><strong>Keycaps: </strong>{selectedProduct.keycaps}</p>
        <button onClick={handleBack}>Back to Products</button>
      </div>
    );
  }

  return (
    <div className="container">
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleViewProduct(product)}>View Product</button>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductList;