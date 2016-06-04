import React, { PropTypes, Component } from 'react'

import {Link} from 'react-router';

const NavigationLinks = (props) => {
  const {deleteHandler} = props;

  return(
    <nav>
      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/todos">All Todos</Link> </li>
        <li> <Link to="/todos/add">Add Todo</Link> </li>
      </ul>
    </nav>
  )
}

NavigationLinks.propTypes = { };

export default NavigationLinks

