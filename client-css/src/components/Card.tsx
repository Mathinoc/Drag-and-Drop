//@ts-nocheck
import React from 'react';
import '../App.css';

export default function Card(props) {

  function onDragStart(e) {
    const target = e.target;
    //e.dataTransfer.setData('cardId', target.id);
    setTimeout(() => {
      target.classList.add('dragging');
    }, 0);
  }

  function onDragOver(e) {
    e.stopPropagation();
    console.log('over');
  }
  return (
    <div
      id={props.id}
      className="card"
      draggable={props.draggable}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
    >
      {props.children}
    </div>
  )
}
