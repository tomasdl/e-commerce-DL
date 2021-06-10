import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const initial_state = [];

  const [shoppingCartContent, setShoppingCartContent] = useState(initial_state);

  // armo un array con todos los productos agregados al carrito
  const addedItems_item = shoppingCartContent.map((elem) => elem.item);

  // funcion que encuentra el indice del producto en el carrito que matchea su id con el id del producto clickeado
  const findItem = (objClciked) =>
    addedItems_item.findIndex(
      (product) => parseInt(product.id) === objClciked.id
    );

  // funcion Agregar Al Carrito (con item y cantidad)
  const addItem = (newAddedItem, newQuantity) => {
    // no permite ingresar si cantidad es 0
    if (newQuantity) {
      // si el indice del producto que matchea su id con el id del producto clickeado es mayor que 0 (si no matchea ninguno es -1), entonces existe Match.
      if (findItem(newAddedItem) >= 0) {
        shoppingCartContent[findItem(newAddedItem)].quantity += newQuantity;
        // sino existe, lo agrega
      } else {
        setShoppingCartContent([
          ...shoppingCartContent,
          {
            item: newAddedItem,
            quantity: newQuantity,
          },
        ]);
      }
    }
  };
  // funcion que remueve un producto clickeado
  const remove = (clickeado) => {
    const removeAddedItem = (objClicked) =>
      addedItems_item.filter(
        (product) => parseInt(product.id) !== objClicked.id
      );
    setShoppingCartContent(removeAddedItem(clickeado));
  };

  // funcion que limpia el carrito
  const clearShoppingCartContent = () => {
    setShoppingCartContent(initial_state);
  };

  return (
    <CartContext.Provider
      value={{
        shoppingCartContent,
        addItem,
        clearShoppingCartContent,
        remove,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
