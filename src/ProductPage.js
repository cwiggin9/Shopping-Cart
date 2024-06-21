import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  console.log('Current productId:', id);

  const products = [
    {
      id: "product-1",
      name: "T-Shirt",
      price: 19.99,
      sizes: ["S", "M", "L", "XL"],
      colors: ["Red", "Blue", "Green"]
    },
    {
      id: "product-2",
      name: "Jacket",
      price: 99.99,
      sizes: ["M", "L", "XL"],
      colors: ["Black", "Brown", "Navy"]
    },
    {
      id: "product-3",
      name: "Cap",
      price: 15.99,
      sizes: ["One Size"],
      colors: ["Black", "White", "Blue"]
    }
  ];

  const product = products.find(p => p.id === id);

  const [selectedSize, setSelectedSize] = useState(product && product.sizes ? product.sizes[0] : '');
  const [selectedColor, setSelectedColor] = useState(product && product.colors ? product.colors[0] : '');

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const sizeLabels = {
    S: 'Small',
    M: 'Medium',
    L: 'Large',
    XL: 'XLarge'
  };

  const handleAddToCart = () => {
    console.log(`Adding ${product.name} (Size: ${selectedSize}) to cart.`);
  };

  if (!product) {
    console.log('Product not found for productId:', id);
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>
        Sizes:
        <select value={selectedSize} onChange={handleSizeChange}>
          {product.sizes.map(size => (
            <option key={size} value={size}>{sizeLabels[size]}</option>
          ))}
        </select>
      </p>
      <p>
        Colors:
        <ul>
          {product.colors.map(color => (
            <li key={color} style={{ cursor: 'pointer', fontWeight: selectedColor === color ? 'bold' : 'normal' }} onClick={() => handleColorChange(color)}>
              {color}
            </li>
          ))}
        </ul>
      </p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
