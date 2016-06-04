import { combineReducers } from 'redux'

import todos from './todos.js'

const myReducer = combineReducers({
  todos: todos
});

export default myReducer;