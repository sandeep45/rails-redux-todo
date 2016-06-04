import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import TodoForm from '../components/TodoForm'
import { editTodo } from '../actions'


const mapStateToProps = (state, ownProps) => {

  const selectedTodoId = ownProps.params.id;
  const selectedTodo = state.todos.todos_data_array.find( todo => todo.id == selectedTodoId)

  return {
    title: selectedTodo.title,
    id: selectedTodoId
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {

  const selectedTodoId = ownProps.params.id;

  return {
    onSubmit: (title) => {
      console.log("dispatching edit for id: ", selectedTodoId);
      dispatch(editTodo(selectedTodoId, title));
      hashHistory.push(`/todos/${selectedTodoId}`);
    }
  };
}

let TodoEdit = (props) => {
  return (
    <div>
      <h3>Editing note: {props.id}</h3>
      <TodoForm {...props} />
    </div>
  );
}

TodoEdit = connect(
    mapStateToProps, mapDispatchToProps
  )(TodoEdit)

export default TodoEdit;
