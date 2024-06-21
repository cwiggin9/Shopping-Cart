import { React, useState } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  {
    id: "product-1",
    name: "T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    variations: [
      {
        id: "pkvsjmg-mx1-ycon",
        name: "Red"
      },
      {
        id: "ns8fzjcn-torh5ge",
        name: "Blue"
      },
      {
        id: "kw_tmgvvbkiymzz8",
        name: "Green"
      }
    ]
  },
  {
    id: "product-2",
    name: "Jacket",
    price: 99.99,
    sizes: ["M", "L", "XL"],
    variations: [
      {
        id: "lcvhsn0lxzdyw8na",
        name: "Black"
      },
      {
        id: "t7hfksl9-qwpl3i",
        name: "Brown"
      },
      {
        id: "mnbvqpwz-45gfk3x",
        name: "Navy"
      }
    ]
  },
  {
    id: "product-3",
    name: "Cap",
    price: 15.99,
    sizes: ["One Size"],
    variations: [
      {
        id: "xcvnjhqp-92jfkei",
        name: "Black"
      },
      {
        id: "plqwoe8z-5skd9fj",
        name: "White"
      },
      {
        id: "zvnxwoqp-38jshdk",
        name: "Blue"
      }
    ]
  }
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) =>
    p.variations.some((v) => v.id === id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const variation = product.variations.find((v) => v.id === id);

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    console.log(`Added ${product.name} (${variation.name}, Size: ${selectedSize}) to cart`);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>
        Sizes:
        <select value={selectedSize} onChange={handleSizeChange}>
          {product.sizes.map((size) => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
      </p>
      <p>Color: {variation.name}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductPage;
