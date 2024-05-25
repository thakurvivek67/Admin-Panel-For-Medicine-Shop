import React from "react";
import Modal from "./Modal";
import "./Cart.css";

const Cart = (props) => {
  const cartitems = (
    <ul className="cartItem">
      {[{ id: "c1", name: "dolo", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal>
      {cartitems}
      <div className="total">
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className="actions">
        <button className="buttonAlt" onClick={props.onClose}>Close</button>
        <button className="buttonCart">Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
