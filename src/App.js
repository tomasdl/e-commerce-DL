import React from "react";
import "./App.css";
import NavBar from "./components/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CartProvider } from "./contexts/cartContext";
import EndPoint from "./components/EndPoint";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:catId">
            <ItemListContainer />
          </Route>
          <Route exact path="/item/:prodId">
            <ItemDetailContainer />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/EndPoint">
            <EndPoint />
          </Route>
        </Switch>
        {/* <Footer/> */}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
