import K from "../constants/"

const todo_meta = (state={}, action) => {
  switch(action.type){

    case K.FETCH_TODO_REQUEST:
    case K.CREATE_TODO_REQUEST:
    case K.DELETE_TODO_REQUEST:
    case K.EDIT_TODO_REQUEST:
      state = Object.assign({}, state, {status: "requesting"});
      return state;

    case K.FETCH_TODO_SUCCESS:
    case K.CREATE_TODO_SUCCESS:
    case K.DELETE_TODO_SUCCESS:
    case K.EDIT_TODO_SUCCESS:
      state = Object.assign({}, state, {status: "completed"});
      return state;

    case K.FETCH_TODO_FAILURE:
    case K.CREATE_TODO_FAILURE:
    case K.DELETE_TODO_FAILURE:
    case K.EDIT_TODO_FAILURE:
      state = Object.assign({}, state, {status: "failed", message: action.message});
      return state;

    default:
      return state;
  }
}

export default todo_meta;
