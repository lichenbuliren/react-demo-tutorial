import { handleActions } from 'redux-actions'
import { VisibilityFilters, initState } from './actions'
import { addTodo, deleteTodo, toggleTodo, setVisibilityFilter } from './actionCreater'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters

export default handleActions(
  new Map(
    [
      [
        addTodo,
        (state, action) => ({
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              text: action.payload.text,
              completed: action.payload.completed
            }
          ]
        })
      ],
      [
        deleteTodo,
        (state, action) => ({
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload.id)
        })
      ],
      [
        toggleTodo,
        (state, action) => ({
          ...state,
          todos: state.todos.map(todo => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                completed: !todo.completed
              }
            }
            return todo
          })
        })
      ],
      [
        setVisibilityFilter,
        (state, action) => ({
          ...state,
          visibilityFilter: action.payload.filter
        })
      ]
    ]
  ),
  initState
)
