//@ts-nocheck
import React, { useEffect } from 'react';
import '../App.css';
import DragHandle from './DragHandle';

export default function Card(props) {

  function onDragStart(e) {
    const target = e.target;
    //e.dataTransfer.setData('cardId', target.id);
    setTimeout(() => {
      target.classList.add('dragging');
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
    target.setAttribute('draggable', 'false')
  }


  useEffect(() => {
    // window.addEventListener("file-upload", callback);

    // return () => window.removeEventListener("file-upload", callback);
  }, [window]);



  return (
    <div
      id={props.card}
      className="card"
      //draggable={props.draggable}
      droppable='false'
      onDragStart={onDragStart}
      //onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onMouseUp={console.log('uuuuuuuuppppppp')}
    >
      <p> {props.card} </p>
      <DragHandle id={props.card} />
    </div>
  )
}
