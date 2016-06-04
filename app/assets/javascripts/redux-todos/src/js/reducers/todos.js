import K from "../constants/"
import todo_meta from "./todo_meta"
import todos_data_array from "./todos_data_array"

const initialState = {
  todo_meta: {},
  todos_data_array: []
};

const todos = (state=initialState, action) => {
  switch(action.type){

    case K.FETCH_TODO_REQUEST:
    case K.CREATE_TODO_REQUEST:
    case K.DELETE_TODO_REQUEST:
    case K.EDIT_TODO_REQUEST:
      state = Object.assign({}, state, {todo_meta: todo_meta(state.todo_meta, action)});
      return state;

    case K.FETCH_TODO_SUCCESS:
    case K.CREATE_TODO_SUCCESS:
    case K.DELETE_TODO_SUCCESS:
    case K.EDIT_TODO_SUCCESS:
      state = Object.assign({}, state, {todo_meta: todo_meta(state.todo_meta, action)});
      state = Object.assign({}, state, {todos_data_array: todos_data_array(state.todos_data_array, action)});
      return state;

    case K.FETCH_TODO_FAILURE:
    case K.CREATE_TODO_FAILURE:
    case K.DELETE_TODO_FAILURE:
    case K.EDIT_TODO_FAILURE:
      state = Object.assign({}, state, {todo_meta: todo_meta(state.todo_meta, action)});
      return state;


    default:
      return state;
  }
}

export default todos;
