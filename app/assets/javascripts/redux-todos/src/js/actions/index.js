import axios from 'axios';

import K from "../constants/"

const requestToEditTodo = () => {
  return {
    type: K.EDIT_TODO_REQUEST
  }
};

const successfullyEditedTodo = (todo) => {
  return {
    type: K.EDIT_TODO_SUCCESS,
    todo
  }
};

const failedToEditTodo = (errorMessage) => {
  return {
    type: K.EDIT_TODO_FAILURE,
    message: errorMessage
  }
};

export const editTodo = (id, title) => {
  return (dispatch) => {

    dispatch(requestToEditTodo());

    return axios.put(`/notes/${id}.json`, {
      comment: title
    }).then(
      (response) => {
        dispatch(successfullyEditedTodo(response.data))
      },
      (response) => {
        dispatch(failedToEditTodo(`Error: ${response.message} ${response.status} ${esponse.data}`));
      }
    );
  }
};

const requestTodos = () => {
  return {
    type: K.FETCH_TODO_REQUEST
  }
};

const receivedTodos = (todos) => {
  return {
    type: K.FETCH_TODO_SUCCESS,
    todos: todos
  }
};

const failedToReceiveTodos = (errorMessage) => {
  return {
    type: K.FETCH_TODO_FAILURE,
    message: errorMessage
  }
};

export const fetchTodos = () => {
  return (dispatch) => {
    dispatch(requestTodos());

    return axios.get(`/notes.json`).
      then(
        response => {
          const data = response.data;
          dispatch(receivedTodos(data));
        },
        response => {
          console.log(response);
          if (response instanceof Error) {
            dispatch(failedToReceiveTodos(`Fetching Failure: ${response.message}`));
          } else {
            dispatch(failedToReceiveTodos(`Fetching Failure: ${response.status} - ${response.data}`));
          }

        }
      );

  }
};

const requestToCreateTodo = () => {
  return {
    type: K.CREATE_TODO_REQUEST
  }
};

const receivedNewTodo = (todo) => {
  return {
    type: K.CREATE_TODO_SUCCESS,
    newTodo: todo
  }
};

const failedToCreateTodo = (errorMessage) => {
  return {
    type: K.CREATE_TODO_FAILURE,
    message: errorMessage
  }
};

export const createTodo = (title) => {
  return (dispatch) => {
    dispatch(requestToCreateTodo());

    return axios.post("/notes.json", {
      comment: title
    }).then(
      (response) => {
        dispatch(receivedNewTodo(response.data))
      },
      (response) => {
        dispatch(failedToCreateTodo("failed to create todo"));
      }
    );
  }
}

const requestToDeleteTodo = () => {
  return {
    type: K.DELETE_TODO_REQUEST
  }
};

const failedToDeleteTodo = () => {
  return {
    type: K.DELETE_TODO_FAILURE
  }
};

const successfullyDeletedTodo = (id) => {
  return {
    type: K.DELETE_TODO_SUCCESS,
    id: id
  }
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    dispatch(requestToDeleteTodo());

    return axios.delete(`/notes/${id}.json`).
      then(
        (response) => {
          dispatch(successfullyDeletedTodo(id));
        },
        (response) => {
          dispatch(failedToDeleteTodo());
        }
      );
  }
}



