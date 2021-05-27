import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;