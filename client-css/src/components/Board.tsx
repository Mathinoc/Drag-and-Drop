//@ts-nocheck
import React from 'react';
import '../App.css';
import Card from './Card';

export default function Board(props) {
  
  function onDragOver(e) {
    e.preventDefault();
    const container = document.querySelector(`#${props.id}`)
    //console.log(props.id, container, e.clientY)
    const afterElement = getDragAfterElement(container, e.clientY);
    //console.log(afterElement);
    const card = document.querySelector('.dragging');
    if (afterElement === null) {
      e.target.appendChild(card);
    } else {
      container?.insertBefore(card, afterElement);
    }
  }

  function getDragAfterElement (container, y) {
    const allCards = [...container.querySelectorAll('.card:not(.dragging)')];
    return allCards.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height/2;
      //console.log(offset);
      if (offset < 0 && offset > closest.offset) {
        return {offset: offset, element: child}
      } else {
        return closest
      }
    }, {offset: Number.NEGATIVE_INFINITY}).element;

  }


  return (
    <div
      id={props.id}
      className="board"
      onDragOver={onDragOver}
    >
      {props.cardList.map(card => (
        <Card card={card} />
      ))}

    </div>
  )
}
