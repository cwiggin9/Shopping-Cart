import React from 'react';
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

  if (!product) {
    console.log('Product not found for productId:', id);
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price.toFixed(2)}</p>
      <p>Sizes: {product.sizes.join(', ')}</p>
      <p>Colors: {product.colors.join(', ')}</p>
    </div>
  );
};

export default ProductPage;
