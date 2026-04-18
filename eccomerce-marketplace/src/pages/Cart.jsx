import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container">
      <h2>Checkout</h2>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} className="card">
              <p>{item.title}</p>
              <p>${item.price}</p>
            </div>
          ))}

          <h3>Total: ${total.toFixed(2)}</h3>

          <button style={{ width: "100%", marginTop: "20px" }}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;