import React from 'react';
import SingleTask from './SingleTask';
import '../styles/List.css';

export default function List({title, taskList}: {title: string, taskList: string[]}) {
  return (
    <div className='single-list-container' >
      <h2>{title}</h2>
      <div className='task-list-container' >
        {taskList.map((task) => {
          return <SingleTask task={task} />
        })}

      </div>
    </div>
  )
}
