import React, { useContext } from "react";
import ListContext from "../Store/ListContext";
import "./List.css";

const List = (props) => {
  const { items } = useContext(ListContext);

  return (
    <div>
      {items.map((item, index) => (
        <div className="item" key={index}>
          <div className="item-info">
            <div>
              <strong>Name:</strong> {item.enteredName}
            </div>
            <div>
              <strong>Description:</strong> {item.enteredDescription}
            </div>
            <div>
              <strong>Price:</strong> {item.enteredPrice}
            </div>
            <div>
              <strong>Quantity:</strong> {item.enteredQuantity}
            </div>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default List;
