import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import TodoDetail from '../components/TodoDetail'

const mapStateToProps = (state, ownProps) => {
  let selectedTodoId;

  // for seperate view we want from url
  if(ownProps.params && ownProps.params.id){
    selectedTodoId = ownProps.params.id;
  }else{ // for inline view we are getting from state
    selectedTodoId = state.selectedTodo;
  }

  return {
    todo: state.todos.todos_data_array.find( todo => todo.id == selectedTodoId) || {}
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

const TodoShow = connect(mapStateToProps,mapDispatchToProps)(TodoDetail);

export default TodoShow;
