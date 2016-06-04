import keyMirror from "keymirror"

var appConstants = keyMirror({
  EDIT_TODO_REQUEST: null,
  EDIT_TODO_SUCCESS: null,
  EDIT_TODO_FAILURE: null,

  DELETE_TODO_REQUEST: null,
  DELETE_TODO_SUCCESS: null,
  DELETE_TODO_FAILURE: null,

  CREATE_TODO_REQUEST: null,
  CREATE_TODO_SUCCESS: null,
  CREATE_TODO_FAILURE: null,

  FETCH_TODO_REQUEST: null,
  FETCH_TODO_SUCCESS: null,
  FETCH_TODO_FAILURE: null
});

export default appConstants;
