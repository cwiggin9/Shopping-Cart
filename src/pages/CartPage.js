import { useState, useEffect } from "react";
import Nav from "../components/Nav";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  return (
    <div>
      <Nav />
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
    </div>
  )
}

export default Cart;
