import { React, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Nav from './Nav';

const products = [
  {
    id: "product-1",
    name: "T-Shirt",
    price: 48,
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
    price: 158,
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
    price: 48,
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

const sizeLabels = {
  S: 'Small',
  M: 'Medium',
  L: 'Large',
  XL: 'XLarge'
};

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    return existingCart.length;
  });
  
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) =>
    p.variations.some((v) => v.id === id)
  );

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const variation = product.variations.find((v) => v.id === id);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);

    const cartItem = {
      variationId: variation.id,
      size: selectedSize
    };
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const navigateToProductPage = (variationId) => {
    navigate(`/products/${variationId}`);
  };

  return (
    <div>
      <Nav cartCount={cartCount} />
      <h2>{product.name}</h2>
      <p>{variation.name}</p> 
      <p>${product.price}</p>
      { product.sizes.length > 1 ?
      <select value={selectedSize} onChange={handleSizeChange}>
        {product.sizes.map((size) => (
          <option key={size} value={size}>{sizeLabels[size]}</option>
        ))}
      </select> : null
      }
      {product.variations.length > 1 && (
        <div>
          <ul>
            {product.variations.map((otherVariation) => (
              <li key={otherVariation.id}>
                <button onClick={() => navigateToProductPage(otherVariation.id)}>
                  {otherVariation.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button onClick={handleAddToCart}>add to cart</button>
    </div>
  );
};

export default ProductPage;
