import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

import ActionButton from './ActionButton'

class TodoList extends Component {

  constructor(props){
    super(props);
  }

  render(){
    const { todos, deleteHandler, editHandler, mouseoveredHandler } = this.props;

    return(
      <div>
        <table>
          <thead>
          <tr>
            <th style={{width: "50px"}}>Id</th>
            <th style={{width: "200px"}}>title</th>
            <th style={{width: "200px"}}>Actions</th>
          </tr>
          </thead>
          <tbody>
            {
              todos.map( (todo) => {
                return (
                  <tr key={todo.id}>
                    <td>{todo.id}</td>
                    <td>{todo.title}</td>
                    <td>
                      <ActionButton
                        handler={deleteHandler.bind(this, todo.id)} text="x" />
                      { " , "}
                      <Link to={`/todos/${todo.id}/edit`}> Edit </Link>
                      { " , "}
                      <Link to={`/todos/${todo.id}`}> Open </Link>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }

}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteHandler: PropTypes.func.isRequired
};

export default TodoList;