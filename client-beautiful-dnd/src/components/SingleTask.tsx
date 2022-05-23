import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import '../styles/SingleTask.css';
import { taskType } from '../App';

export default function SingleTask({ task, index, setList }: { task: taskType, index: number, setList: React.Dispatch<React.SetStateAction<taskType[]>> }) {
  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <article
          className='flex justify-between w-full bg-color-orange rounded-xl px-3 py-2'
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.task}
          <nav className='space-x-1' >
            <button>
              <i className="bi bi-pencil"></i>
            </button>
            <button>
              <i className="bi bi-trash2"></i>
            </button>
          </nav>
        </article>
      )}
    </Draggable>

  )
}
