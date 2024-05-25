
import React, { useState } from "react";
import ListContext from "./ListContext";

const ListContextProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  return (
    <ListContext.Provider value={{ items, addItem }}>
      {props.children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;

