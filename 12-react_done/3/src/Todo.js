import React from 'react'
import {deleteTask} from './redux/actions/deleteTaskAction'
import { useDispatch } from "react-redux";

export default function Todo({ todo }) {
  const dispatch = useDispatch();

  function handleClick(){
    dispatch(deleteTask(todo.id))
  } 

  return (
    <div>
      <label>
        {todo.name+" "}
        <button onClick={handleClick}>X</button>
      </label>
    </div>
  )
}
