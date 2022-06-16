//@ts-nocheck
import React from 'react';
import '../App.css';

export default function Card(props) {

  function cardDragStart(e) {
    const target = e.target;
    e.dataTransfer.setData('cardId', target.id);

    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  }

  function dragCardOver(e) {
    e.stopPropagation();
  }
  return (
    <div
      id={props.id}
      className="card"
      draggable={props.draggable}
      onDragStart={cardDragStart}
      onDragOver={dragCardOver}
    >
      {props.children}
    </div>
  )
}
