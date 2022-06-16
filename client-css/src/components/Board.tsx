//@ts-nocheck
import React from 'react';
import '../App.css';

export default function Board(props) {

  //function dropCard(e) {
    //e.preventDefault();
    //! can select element based on class "dragging" instead of using getData.
    //const cardId = e.dataTransfer.getData('cardId');
    //const card = document.getElementsByClassName('dragging')[0];
    //card!.classList.remove('dragging');
    //console.log(card)
    //e.target.appendChild(card);
    //console.log('drop')
  // }
  
  function onDragOver(e) {
    e.preventDefault();
    const card = document.querySelector('.dragging');
    e.target.appendChild(card);
  }

  return (
    <div
      id={props.id}
      className="board"
      // onDrop={dropCard}
      onDragOver={onDragOver}
    >
      {props.children}
    </div>
  )
}
