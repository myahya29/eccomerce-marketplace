import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navbar">
      <div className="nav-inner">
        
        <Link to="/" className="logo">
          Zaryonix Store
        </Link>

        <Link to="/cart" className="cart">
          🛒 {cart.length}
        </Link>

      </div>
    </div>
  );
};

export default Navbar;