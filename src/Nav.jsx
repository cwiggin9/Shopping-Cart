import { Link } from "react-router-dom";

function Nav({ cartCount }) {
  return (
    <div>
      <Link to={"/"}>Home</Link>
      <Link to={"/cart"}>Cart {cartCount > 0 && <span>({cartCount})</span>}</Link>
    </div>
  );
}

export default Nav;
