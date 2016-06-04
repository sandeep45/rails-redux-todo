import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { deleteTodo, editTodo } from '../actions'

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos.todos_data_array
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteHandler: (id) => {
      dispatch(deleteTodo(id));
    }
  };
}

let AllTodos = (props) => {
  return (
    <div>
      <h3>All Todos</h3>
      <TodoList {...props} />
    </div>
  );
};

AllTodos = connect(mapStateToProps,mapDispatchToProps)(AllTodos);

export default AllTodos;
