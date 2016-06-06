import React from "react"
import { Route, IndexRoute } from "react-router"

import App from "./components/App"
import AllTodos from "./containers/AllTodos.js"
import TodoAdd from "./containers/TodoAdd.js"
import TodoEdit from "./containers/TodoEdit.js"
import TodoShow from "./containers/TodoShow.js"
import Dashboard from "./components/Dashboard.js"


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Dashboard} />
    <Route path="/todos" component={AllTodos} />
    <Route path="/todos/add" component={TodoAdd} />
    <Route path="/todos/:id/edit" component={TodoEdit} />
    <Route path="/todos/:id" component={TodoShow} />
  </Route>
);

export default routes;