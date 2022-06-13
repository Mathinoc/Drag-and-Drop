import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../styles/SingleTask.css';
import { taskType } from '../App';

export default function SingleTask({ task, index, setList }: { task: taskType, index: number, setList: React.Dispatch<React.SetStateAction<taskType[]>> }) {

  function deleteTask(index: number) {
    console.log("cliiick", index)
    setList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)])
  }
  const [toggleInput, setToggleInput] = useState(true);

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided, snapshot) => (
        <article
          className={`${snapshot.isDragging && "shadow-md"} flex justify-between w-full bg-color-orange rounded-xl px-3 py-2`}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {toggleInput ?
            (<>{task.task}
              <nav className='space-x-1' >
                <button>
                  <i className="bi bi-pencil"></i>
                </button>
                <button onClick={() => deleteTask(index)}>
                  <i className="bi bi-trash2"></i>
                </button>
              </nav>
            </>
            )
            :
            (<>
              <input value={task.task} />
              <button onClick={() => { }}>Y</button>
            </>
            )}
        </article>
      )
      }
    </Draggable >

  )
}
