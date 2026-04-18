import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      background: "black",
      color: "white"
    }}>
      <Link to="/" style={{ color: "white" }}>Zaryonix Shop</Link>

      <Link to="/cart" style={{ color: "white" }}>
        🛒 {cart.length}
      </Link>
    </nav>
  );
};

export default Navbar;