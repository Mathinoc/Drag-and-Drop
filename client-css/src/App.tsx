//@ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';

function App() {


  const cardListOne = ['one', 'two', 'three', 'four'];
  const cardListTwo = ['five', 'siw', 'seven', 'eight'];


  return (
    <div className="App">
      <main className="board-container">
        <Board id="board-one" cardList={cardListOne} />
        <Board id="board-two" cardList={cardListTwo} />
      </main>
    </div>
  );
}

export default App;
