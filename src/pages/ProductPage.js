import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import products from "../data/products";

const sizeLabels = {
  S: "Small",
  M: "Medium",
  L: "Large",
  XL: "XLarge",
};

const ProductPage = () => {
  const [cartCount, setCartCount] = useState(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    return existingCart.length;
  });

  const [cartItems, setCartItems] = useState(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    return existingCart.reduce((acc, item) => {
      acc[item.variationId] = {
        productName: item.productName,
        price: item.price,
        size: item.size,
        color: item.color,
      };
      return acc;
    }, {});
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(
        Object.keys(cartItems).map((variationId) => ({
          variationId,
          productName: cartItems[variationId].productName,
          price: cartItems[variationId].price,
          size: cartItems[variationId].size,
          color: cartItems[variationId].color,
        })),
      ),
    );
    setCartCount(Object.keys(cartItems).length);
  }, [cartItems]);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.variations.some((v) => v.id === id));

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  if (!product) {
    return <div>Product not found</div>;
  }

  const variation = product.variations.find((v) => v.id === id);

  const handleRemoveFromCart = () => {
    const updatedCartItems = { ...cartItems };
    delete updatedCartItems[variation.id];
    setCartItems(updatedCartItems);
  };

  const handleAddToCart = () => {
    const updatedCartItems = {
      ...cartItems,
      [variation.id]: {
        productName: product.name,
        price: product.price,
        size: selectedSize,
        color: variation.color,
      },
    };
    setCartItems(updatedCartItems);

    localStorage.setItem(
      "cart",
      JSON.stringify(
        Object.keys(updatedCartItems).map((variationId) => ({
          variationId,
          size: updatedCartItems[variationId].size,
          color: updatedCartItems[variationId].color,
          price: updatedCartItems[variationId].price,
        })),
      ),
    );
  };

  const navigateToProductPage = (variationId) => {
    navigate(`/products/${variationId}`);
  };

  return (
    <div>
      <Nav cartCount={cartCount} />
      <h2>{product.name}</h2>
      <p>{variation.color}</p>
      <p>{variation.name}</p>
      <p>${product.price}</p>
      {!cartItems.hasOwnProperty(variation.id) && product.sizes.length > 1 ? (
        <select value={selectedSize} onChange={handleSizeChange}>
          {product.sizes.map((size) => (
            <option key={size} value={size}>
              {sizeLabels[size]}
            </option>
          ))}
        </select>
      ) : null}
      {product.variations.length > 1 && (
        <div>
          <ul>
            {product.variations.map((otherVariation) => (
              <li key={otherVariation.id}>
                <button
                  onClick={() => navigateToProductPage(otherVariation.id)}
                >
                  {otherVariation.color}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {cartItems.hasOwnProperty(variation.id) ? (
        <button onClick={handleRemoveFromCart}>remove</button>
      ) : (
        <button onClick={handleAddToCart}>add to cart</button>
      )}
    </div>
  );
};

export default ProductPage;
