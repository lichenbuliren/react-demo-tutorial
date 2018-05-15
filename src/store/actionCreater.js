import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actions'
import { createActions } from 'redux-actions'

const { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } = createActions({
  ADD_TODO: text => ({ text, completed: false }),
  DELETE_TODO: id => ({ id }),
  TOGGLE_TODO: id => ({ id }),
  SET_VISIBILITY_FILTER: filter => ({ filter })
})

export {
  addTodo,
  deleteTodo,
  toggleTodo,
  setVisibilityFilter
}