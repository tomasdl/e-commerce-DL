import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initial_state = [{ item: {}, quantity: 0 }];
  const [shoppingCartContent, setShoppingCartContent] = useState([
    initial_state,
  ]);

  // const obj = (newItem) => {
  //   shoppingCartContent.map((elem) => {
  //     return(
  //     elem.item.some((cada) => {
  //       return(cada.name === newItem.name);
  //     })
  //   )});
  // };

  const addItem = (newAddedItem, newQuantity) => {
    if (shoppingCartContent[0].quantity === 0) {
      setShoppingCartContent([{ item: newAddedItem, quantity: newQuantity }]);
    // } else if (obj(newAddedItem)) {
    //   setShoppingCartContent([
    //     ...shoppingCartContent,
    //     {
    //       item: newAddedItem,
    //       quantity: newQuantity,
    //     },
    //   ]);
    // }
    } else {
      setShoppingCartContent([
        ...shoppingCartContent,
        {
          item: newAddedItem,
          quantity: newQuantity,
        },
      ]);
    }
  };

  // const removeItem = (itemRemovedId) =>{
  //     setShoppingCartContent(shoppingCartContent.map(producto=>producto.item.id))
  // }

  const clearShoppingCartContent = () => {
    setShoppingCartContent(initial_state);
  };
  console.log(shoppingCartContent);

  return (
    <CartContext.Provider
      value={{
        shoppingCartContent,
        addItem,
        clearShoppingCartContent,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
