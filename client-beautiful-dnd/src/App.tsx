import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useRef, useEffect } from 'react';
import List from "./components/List";

function App() {
  const [taskList, setTaskList] = useState<string[]>(['hello', 'bye']);
const creationField = useRef<HTMLInputElement | null>(null);

function createTask(event: any){
  event.preventDefault();
  setTaskList(prev => [...prev, creationField.current!.value]);
}

useEffect(()=> {
  creationField.current!.value = '';
}, [taskList])

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="task-creation-container">
        <form onSubmit={(e) => createTask(e)} >
          <input ref={creationField} placeholder="Create task..." />
          <button type='submit'>Create</button>
        </form>
      </div>
      <div className="global-list-container" >
        <List title={"Todo"} taskList={taskList} />
        <List title={"Accomplished"} taskList={taskList} />
      </div>

    </div>
  );
}

export default App;
