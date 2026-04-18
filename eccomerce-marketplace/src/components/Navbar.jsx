import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "15px 30px",
      background: "#111",
      borderBottom: "1px solid #333"
    }}>
      <Link to="/" style={{ color: "#7b2ff7", fontWeight: "bold" }}>
        Zaryonix Store
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        🛒 {cart.length}
      </Link>
    </nav>
  );
};

export default Navbar;