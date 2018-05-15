export const ADD_TODO = 'addTodo'
export const DELETE_TODO = 'deleteTodo'
export const TOGGLE_TODO = 'toggleTodo'
export const SET_VISIBILITY_FILTER = 'setVisibilityFilter'

export const VisibilityFilters = {
  SHOW_ALL: 'showAll',
  SHOW_COMPLETED: 'showCompleted',
  SHOW_ACTIVE: 'showActive'
}

export const initState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [
    {
      id: 1,
      text: 'test todo 1',
      completed: false
    },
    {
      id: 2,
      text: 'test todo 2',
      completed: false
    }
  ]
}