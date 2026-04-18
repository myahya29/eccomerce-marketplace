import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <img src={product.image} height="120" />

      <h4>{product.title.slice(0, 20)}...</h4>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <Link to={`/product/${product.id}`}>
        <button>View</button>
      </Link>
    </div>
  );
};

export default ProductCard;