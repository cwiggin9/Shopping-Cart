import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

function Nav({ cartCount }) {
  const [localCartCount, setLocalCartCount] = useState(0);

  useEffect(() => {
    if (cartCount === undefined) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      setLocalCartCount(cartItems.length);
    }
  }, [cartCount]);

  const displayCartCount = cartCount === undefined ? localCartCount : cartCount;

  return (
    <div className={`${styles.nav} nav`}>
      <Link to={"/"} className={styles.navLink}>
        Home
      </Link>
      <Link to={"/cart"} className={styles.navLink}>
        Cart {displayCartCount > 0 && <span>({displayCartCount})</span>}
      </Link>
    </div>
  );
}

export default Nav;
