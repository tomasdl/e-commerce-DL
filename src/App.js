import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer greeting="Soy un h1 dentro de un div"/>
    </div>
  );
}

export default App;
