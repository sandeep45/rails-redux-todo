import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {
    count: state.todos.todos_data_array.length
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {}
}

let TodoCount = (props) => {
  return(
    <div>
      Count: {props.count}
    </div>
  )
}

TodoCount = connect(mapStateToProps,mapDispatchToProps)(TodoCount);

export default TodoCount;
