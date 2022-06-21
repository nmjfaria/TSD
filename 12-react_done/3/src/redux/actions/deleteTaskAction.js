export const deleteTask = (id) => {
  return {
    type: 'DELETETASK',
    payload: id
  }
}