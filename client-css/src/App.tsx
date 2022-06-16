//@ts-nocheck
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <main className="board-container">
        <Board id="board-one">
          <Card id="card-one" draggable="true">
            <p>Card one</p>
          </Card>
        </Board>
        <Board id="board-two">
          <Card id="card-two" draggable="true">
            <p>Card two</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
