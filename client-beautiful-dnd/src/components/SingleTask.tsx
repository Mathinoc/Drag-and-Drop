import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../styles/SingleTask.css';
import { taskType } from '../App';

export default function SingleTask({ task, index, setList }: { task: taskType, index: number, setList: React.Dispatch<React.SetStateAction<taskType[]>> }) {
  const [toggleInput, setToggleInput] = useState(true);

  function deleteTask(index: number) {
    console.log("cliiick", index)
    setList(prev => [...prev.slice(0, index), ...prev.slice(index + 1)])
  }

  function editTask(index: number) {
    setToggleInput(false);
  }

  function saveEdit(index: number) {
    setToggleInput(true);
  }

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
                <button onClick={() => editTask(index)}>
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
            {/* Error: input changes the state without the setter */}
              <input value={task.task} />
              <button onClick={() => saveEdit(index)}>Y</button>
            </>
            )}
        </article>
      )
      }
    </Draggable >

  )
}
