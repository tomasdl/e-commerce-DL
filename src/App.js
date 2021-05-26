import React from 'react';
import './App.css';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <ItemListContainer/>
    </div>
  );
}

export default App;