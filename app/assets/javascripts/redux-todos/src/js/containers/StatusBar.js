import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions'
import ActionButton from '../components/ActionButton'

const mapStateToProps = (state, ownProps) => {
  return {
    status: state.todos.todo_meta.status,
    message: state.todos.todo_meta.message
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTodos: () => {
      dispatch(fetchTodos())
    }
  };
}

let StatusBar = (props) => {

  let statusClass = "black";
  if(props.status == "requesting"){
    statusClass = "orange";
  }else if(props.status == "completed"){
    statusClass = "green";
  }else if(props.status == "failed"){
    statusClass = "red";
  }

  return (
    <div>
    Status Bar : {" "}
    <ActionButton handler={props.fetchTodos} text="Reload" />
    {" "} , {" "}
    Ajax Status : <span className={statusClass}>{props.status}</span>
    {" "}
    <span className={statusClass}>{props.message}</span>
    </div>
  );
};

StatusBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(StatusBar);

export default StatusBar;