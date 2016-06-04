import React, { PropTypes, Component } from 'react'

import TodoAdd from "../containers/TodoAdd"
import LastFewTodos from "../containers/LastFewTodos"

const Dashboard = (props) => {
  const {deleteHandler} = props;

  return(
    <div>
      <TodoAdd />
      <hr/>
      <LastFewTodos />
    </div>
  )
}

export default Dashboard

