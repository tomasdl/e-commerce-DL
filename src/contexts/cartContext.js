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
    (product) => product.id === objClciked.id
    );
    
    // funcion Agregar Al Carrito (con item y cantidad)
    const addItem = (newAddedItem, newAddedQuantity) => {
      // no permite ingresar si cantidad es 0
      if (newAddedQuantity) {
        // si el indice del producto que matchea su id con el id del producto clickeado es mayor que 0 (si no matchea ninguno es -1), entonces existe Match.
        if (findItem(newAddedItem) >= 0) {
          shoppingCartContent[findItem(newAddedItem)].quantity +=
          newAddedQuantity;
          setShoppingCartContent([...shoppingCartContent]);
          // sino existe, lo agrega
      } else {
        setShoppingCartContent([
          ...shoppingCartContent,
          {
            item: newAddedItem,
            quantity: newAddedQuantity,
          },
        ]);
      }
    }
  };
  // funcion que reduce un kg de producto clickeado

  const remove_1 = (itemRemoved) => {
    if (shoppingCartContent[findItem(itemRemoved)].quantity > 1) {
      setShoppingCartContent(
        [...shoppingCartContent],
        (shoppingCartContent[findItem(itemRemoved)].quantity -= 1)
      );
      // console.log(shoppingCartContent);
    }
  };

  // funcion que elimina el item clickeado
  const remove_item = (itemRemoved) => {
    const newCart = shoppingCartContent.filter(
      (elem) => elem !== shoppingCartContent[findItem(itemRemoved)]
    );
    setShoppingCartContent(newCart);
  };

  // funcion que limpia el carrito
  const clearShoppingCartContent = () => {
    setShoppingCartContent(initial_state);
  };

  const totalPrice = shoppingCartContent?.reduce(
    (acumulador, item) => acumulador + item.item.precio * item.quantity,
    0
  );

  const totalItems = shoppingCartContent?.reduce(
    (acumulador, item) => acumulador + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        shoppingCartContent,
        addItem,
        clearShoppingCartContent,
        remove_1,
        remove_item,
        totalPrice,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
