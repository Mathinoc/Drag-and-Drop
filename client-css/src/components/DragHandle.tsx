//@ts-nocheck
import React from 'react'

export default function Drag(props) {

  function onMouseDown (e) {
    e.target.parentNode.setAttribute('draggable', 'true')
    console.log('draggable')
  }
  // function onMouseUp (e) {
  //   console.log('NOT draggable')
  //   e.target.parentNode.setAttribute('draggable', 'false')
  // }
  return (
    <div
    className='drag-handle'
      //id={props.card + props.card}
      onMouseDown={onMouseDown}
      // onMouseUp={onMouseUp}
    >
      Drag
    </div>
  )
}
