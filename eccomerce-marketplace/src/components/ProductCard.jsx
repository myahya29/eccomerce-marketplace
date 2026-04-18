import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <img src={product.image} width="150" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <br />

      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductCard;