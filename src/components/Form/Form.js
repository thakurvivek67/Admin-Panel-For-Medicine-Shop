
import React, { useContext, useState } from "react";
import "./Form.css";
import ListContext from "../Store/ListContext";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredQuantity, setEnteredQuantity] = useState("");

  const { addItem } = useContext(ListContext);

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const descriptionChangeHandler = (event) => {
    setEnteredDescription(event.target.value);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
  };

  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    addItem({ enteredName, enteredDescription, enteredPrice, enteredQuantity });
    setEnteredName("");
    setEnteredDescription("");
    setEnteredPrice("");
    setEnteredQuantity("");
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div>
        <label htmlFor="name" className="inp1">
          Medicine Name:{" "}
        </label>
        <input
          type="text"
          id="name"
          className="div1"
          value={enteredName}
          onChange={nameChangeHandler}
        />

        <label htmlFor="description" className="inp2">
          Description:{" "}
        </label>
        <input
          type="text"
          id="description"
          className="div2"
          value={enteredDescription}
          onChange={descriptionChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="price" className="inp3">
          Price:{" "}
        </label>
        <input
          type="number"
          id="price"
          className="div3"
          value={enteredPrice}
          onChange={priceChangeHandler}
        />

        <label htmlFor="quantity" className="inp4">
          Quantity Available:{" "}
        </label>
        <input
          type="number"
          id="quantity"
          className="div4"
          value={enteredQuantity}
          onChange={quantityChangeHandler}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
};

export default Form;
