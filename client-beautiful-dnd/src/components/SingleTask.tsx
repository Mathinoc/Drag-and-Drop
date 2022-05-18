import React from 'react';
import '../styles/SingleTask.css';

export default function SingleTask({ task }: { task: string }) {
  return (
    <article className='single-article' >
      {task}
      <nav>
        <button>
          <i className="bi bi-trash2"></i>
        </button>
      </nav>
    </article>

  )
}
