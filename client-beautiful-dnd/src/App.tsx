import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState, useRef, useEffect } from 'react';
import List from "./components/List";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

export interface taskType {
  id: number,
  task: string,
  isAccomplished: boolean
}

function App() {
  const [taskList, setTaskList] = useState<taskType[]>([]); //{id:Date.now(), task:'hello', isAccomplished: false}
  const [completedTodos, setCompletedTodos] = useState<taskType[]>([])
  const creationField = useRef<HTMLInputElement | null>(null);

console.log(taskList)
  useEffect(() => {
    creationField.current!.value = '';
  }, [taskList])
  function createTask(event: any) {
    event.preventDefault();
    setTaskList(prev => [...prev, {id: Date.now(),task: creationField.current!.value, isAccomplished: false}]);
  }

  function onDragEnd (result: DropResult) {
    const { source, destination } = result;
    console.log(source, destination)
    if (!destination) {
      return
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return
    }
    let add, active = [...taskList], complete = [...completedTodos];
    if (source.droppableId === "Todo") {
      console.log('here')
      console.log('source.index', source.index)
      add = active[source.index];
      console.log('add', add)
      active.splice(source.index, 1); // not working ?
      setTimeout( () => {console.log('active should be empty', active)}, 1000)
    } else {
      console.log("not here 1")
      add = complete[source.index];
      complete.splice(source.index, 1);
    }
    if (destination.droppableId === "Accomplished") {
      console.log("Accomplished")
      active.splice(destination.index, 0, add);
      //console.log('active add', active)
    } else {
      //console.log("not here 2")
      complete.splice(destination.index, 0, add);
    }
    console.log(complete)
    //console.log('active', active)
    setCompletedTodos(complete);
    setTaskList(active);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='flex-col space-y-5 min-h-screen bg-gradient-to-r from-color1 to-color2'>
        <h1 className='font-bold text-center py-4 text-2xl' >Task Manager</h1>
        <div className="text-center">
          <form onSubmit={(e) => createTask(e)} className='flex-center space-x-4' >
            <input ref={creationField} placeholder="Create task..." className='shadow border rounded py-2 px-3 w-full max-w-xs' />
            <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Create</button>
          </form>
        </div>
        <div className='flex justify-center gap-x-10' >
          <List
            title={"Todo"}
            list={taskList}
            setList={setTaskList}

          />
          <List
            title={"Accomplished"}
            list={completedTodos}
            setList={setCompletedTodos} />
        </div>

      </div>
    </DragDropContext>
  );
}

export default App;
