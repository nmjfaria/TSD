
import TodoList from "./TodoList";
import {useState, useRef} from 'react'
import {addTask} from './redux/actions/addTaskAction'
import { useSelector, useDispatch } from "react-redux";

function App() {
  const tasks = useSelector((state) => state);
  
  const todoNameRef = useRef()
  const dispatch = useDispatch();

  function handleAddtodo(e) {
    const name = todoNameRef.current.value
    console.log('TODO', name);
    if(name === '') return
    
    dispatch(addTask(name))
    

    todoNameRef.current.value = null
  }

  return (
    <>
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddtodo}>Add todo</button>
      <TodoList todos={tasks} />
    </>
  )
}

export default App;