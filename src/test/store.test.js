import store from '../store'
import { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } from '../store/actionCreater'
import { initState, ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS, VisibilityFilters } from '../store/actions'

const state = store.getState()
const initTodos = initState.todos

test('test init store', () => {
  expect(state).toEqual(initState)
})

test('test add todo', () => {
  store.dispatch(addTodo('test add to'))
  expect(store.getState().todos).toEqual([...initTodos, {
    id: initTodos.length + 1,
    text: 'test add to',
    completed: false
  }])
})