import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import styles from "../styles/Cart.module.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  return (
    <div>
      <Nav />
      <div className={styles.cartContainer}>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <p>{item.productName}</p>
                <p>{item.size}</p>
                <p>{item.color}</p>
                <p>${item.price}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Cart;
