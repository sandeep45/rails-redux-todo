import K from "../constants/"

let id = 0;

const todos_data_array = (state=[], action) => {
  switch(action.type){

    case K.FETCH_TODO_SUCCESS:
      const todos_data_array = action.todos.map( todo => {
        return {
          id: todo.id,
          title: todo.comment,
          created_at: todo.created_at,
          updated_at: todo.updated_at,
        }
      });
      return todos_data_array;

    case K.CREATE_TODO_SUCCESS:
      const newTodo = action.newTodo
      return state.concat({
        id: newTodo.id,
        title: newTodo.comment,
        created_at: newTodo.created_at,
        updated_at: newTodo.updated_at,
      });

    case K.DELETE_TODO_SUCCESS:
      const deletedTodoId = action.id
      return state.filter( item => item.id != action.id )

    case K.EDIT_TODO_SUCCESS:
      const itemIndex = state.findIndex( item => item.id == action.todo.id )
      return [
        ...state.slice(0,itemIndex),
        {
          id: action.todo.id,
          title: action.todo.comment,
          created_at: action.todo.created_at,
          updated_at: action.todo.updated_at,
        },
        ...state.slice(action.todo.id),
      ];

    default:
      return state;
  }
}

export default todos_data_array
