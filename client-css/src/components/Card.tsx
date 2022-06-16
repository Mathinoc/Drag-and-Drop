//@ts-nocheck
import React from 'react';
import '../App.css';

export default function Card(props) {

  function onDragStart(e) {
    const target = e.target;
    //e.dataTransfer.setData('cardId', target.id);
    setTimeout(() => {
      target.classList.add('dragging');
      console.log(target)
    }, 0);

    console.log('start')
  }

  function onDragOver(e) {
    e.stopPropagation();
  }
  function onDragEnd(e) {
    e.stopPropagation();
    const target = e.target;
    target.classList.remove('dragging');
    console.log('over')
  }
  return (
    <div
      id={props.id}
      className="card"
      draggable={props.draggable}
      droppable='false'
      onDragStart={onDragStart}
      //onDragOver={onDragOver}
      onDragEnd={onDragEnd}
    >
      {props.children}
    </div>
  )
}
