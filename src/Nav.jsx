import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Nav({ cartCount }) {
  const [localCartCount, setLocalCartCount] = useState(0);

  useEffect(() => {
    if (cartCount === undefined) {
      const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
      setLocalCartCount(cartItems.length);
    }
  }, [cartCount]);

  const displayCartCount = cartCount === undefined ? localCartCount : cartCount;

  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart {displayCartCount > 0 && <span>({displayCartCount})</span>}</Link>
    </div>
  );
}

export default Nav;
