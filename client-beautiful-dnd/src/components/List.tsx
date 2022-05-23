import React from 'react';
import SingleTask from './SingleTask';
import '../styles/List.css';
import { Droppable } from 'react-beautiful-dnd';
import { taskType } from '../App';

export default function List({ title, list, setList }: { title: string, list: taskType[], setList:React.Dispatch<React.SetStateAction<taskType[]>> }) {
  return (
    <div className='w-full max-w-xs bg-slate-400 rounded-xl p-4' >
      <Droppable droppableId='title' key='title' >
        {
          (provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <h2 className='pl-2 mb-2 font-bold' >{title}</h2>
              <div className='flex-column space-y-2' >
                {list.map((task, index) => {
                  return <SingleTask task={task} key={task.id} index={index} setList={setList}/>
                })}

              </div>
            </div>
          )
        }
      </Droppable>
    </div>
  )
}
