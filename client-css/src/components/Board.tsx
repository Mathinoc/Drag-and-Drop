//@ts-nocheck
import React from 'react';
import '../App.css';

export default function Board(props) {

  function dropCard(e) {
    e.preventDefault();
    const cardId = e.dataTransfer.getData('cardId');
    const card = document.getElementById(cardId);
    card!.style.display = 'block';
    e.target.appendChild(card)
  }

  function dragCard(e) {
    e.preventDefault();

  }

  return (
    <div
      id={props.id}
      className="board"
      onDrop={dropCard}
      onDragOver={dragCard}
    >
      {props.children}
    </div>
  )
}
