import React from 'react';

import NavigationLinks from './NavigationLinks.js'
import TodoCount from '../containers/TodoCount.js'
import StatusBar from '../containers/StatusBar'

const App = (props) => {
  return(
    <div className="container">

      <NavigationLinks />

      <TodoCount />

      <hr />

      {props.children}

      <hr />

      <StatusBar />

    </div>
  )
}

export default App

