import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS } from './actions'
import { createActions } from 'redux-actions'

const { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } = createActions({
  ADD_TODO: text => ({ text, completed: false }),
  DELETE_TODO: id => ({ id }),
  TOGGLE_TODO: id => ({ id }),
  SET_VISIBILITY_FILTERS: type => ({ type })
})

export {
  addTodo,
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
}

// export const addTodo = text => ({
//   type: ADD_TODO,
//   payload: {
//     text
//   }
// })

// export const deleteTodo = id => ({
//   type: DELETE_TODO,
//   payload: {
//     id
//   }
// })

// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   payload: {
//     id
//   }
// })

// export const filterTodos = type => ({
//   type: FILTER_TODOS,
//   payload: {
//     type
//   }
// })