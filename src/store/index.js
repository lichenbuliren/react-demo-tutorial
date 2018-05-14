import { createStore } from 'redux'
import todoApp from './reducers'
import { VisibilityFilters } from './actions'

export default createStore(todoApp)
