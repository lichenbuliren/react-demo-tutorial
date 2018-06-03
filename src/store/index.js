import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import todoApp from './reducers'
import { VisibilityFilters } from './actions'

const reducer = combineReducers({
  form: reduxFormReducer,
  todoApp,
})

const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)
export default store
