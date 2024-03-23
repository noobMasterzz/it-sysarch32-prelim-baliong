// App.jsx
import React from 'react';
import Header from './Header';
import Pokedex from './Pokedex';
import './index.css';


function App() {
  return (
    <div className="app">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
