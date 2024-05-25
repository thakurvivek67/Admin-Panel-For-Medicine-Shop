import React, { useState } from 'react'
import Header from './components/Layout/Header';
import Form from './components/Form/Form';
import Cart from './components/Cart/Cart';
import ListContextProvider from './components/Store/ListContextProvider';
import List from './components/List/List';

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <ListContextProvider className="App">
       {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <Form/>
      <List/>
    </ListContextProvider>
  );
}

export default App;
