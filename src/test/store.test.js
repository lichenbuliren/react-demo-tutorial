import store from '../store'
import { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } from '../store/actionCreater'
import { initState, ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTERS, VisibilityFilters } from '../store/actions'

const state = store.getState()
const initTodos = initState.todos
const initVisibilityFilter = initState.visibilityFilter

test('test init store', () => {
  expect(state).toEqual(initState)
})

test('test add todo', () => {
  store.dispatch(addTodo('test add to'))
  expect(store.getState()).toEqual({
    ...initState,
    todos: [...initTodos, {
      id: initTodos.length + 1,
      text: 'test add to',
      completed: false
    }]
  })
})

test('delete last todo', () => {
  const todos = store.getState().todos
  store.dispatch(deleteTodo(todos.length))
  expect(store.getState().todos).toEqual(initTodos)
})

test('set visibility filter', () => {
  store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
  expect(store.getState().visibilityFilter).toBe(VisibilityFilters.SHOW_COMPLETED)
})

test('toggle todo status', () => {
  const firstTodo = initTodos[0]
  store.dispatch(toggleTodo(1))
  expect(store.getState().todos[0].completed).toBe(!firstTodo.completed)
})