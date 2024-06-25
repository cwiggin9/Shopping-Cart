import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Filter from "../components/Filter";
import styles from "../styles/Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(() => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    return existingCart.length;
  });

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    const updatedCartCount = updatedCart.length;
    setCartCount(updatedCartCount);
  };

  return (
    <div className={styles.container}>
      <Nav cartCount={cartCount}/>
      <div className={styles.content}>
        <Filter />
        <div className={styles.cartContainer}>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index} className={styles.cartItem}>
                  <div className={styles.itemContainer}>
                    <div className={styles.imageContainer}>
                      <img
                        src={item.imagePath}
                        alt={`${item.productName} - ${item.color}`}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.productInfo}>
                      <p>
                        {item.productName} {item.color}
                      </p>
                      <p>{item.size}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeFromCart(index)}>
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
