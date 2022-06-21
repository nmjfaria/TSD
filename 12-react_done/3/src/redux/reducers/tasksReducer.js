import { v4 as uuidv4 } from 'uuid';

const initialState = [{ id: uuidv4(), name: "Task 1", complete: false }, { id: uuidv4(), name: "Task 2", complete: false }]

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTASK':
      return [...state, { id: uuidv4(), name: action.payload, complete: false }]
    case 'DELETETASK':
      return state.filter(e => e.id !== action.payload)
    default:
      return state
  }
}

export default tasksReducer;