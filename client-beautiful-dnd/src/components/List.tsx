import React from 'react';
import SingleTask from './SingleTask';
import '../styles/List.css';
import { Droppable } from 'react-beautiful-dnd';
import { taskType } from '../App';

export default function List({ title, list, setList }: { title: string, list: taskType[], setList: React.Dispatch<React.SetStateAction<taskType[]>> }) {
  return (
    <>
      <Droppable droppableId={title} >
        {
          (provided, snapshot) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className={`${snapshot.isDraggingOver && 'bg-slate-500'} w-full max-w-xs bg-slate-400 rounded-xl p-4 h-fit`}>
                <h2 className='pl-2 mb-2 font-bold' >{title}</h2>
                <div className='flex-column space-y-2' >

                  {list.map((task, index) => (
                    <SingleTask
                      task={task}
                      key={task.id}
                      index={index}
                      setList={setList}
                    />
                  ))}
                </div>
                {provided.placeholder}
              </div>
          )
        }
      </Droppable>
    </>
  )
}
