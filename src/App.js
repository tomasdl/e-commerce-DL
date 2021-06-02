import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Switch>
        <Route exact path="/">
          <ItemListContainer/>
        </Route>
        <Route exact path="/category/:catId">
          <ItemListContainer/>
        </Route>
        <Route exact path="/item/:prodId">
          <ItemDetailContainer/>
        </Route>
      </Switch>
    {/* <Footer/> */}
    </BrowserRouter>
  );
}

export default App;