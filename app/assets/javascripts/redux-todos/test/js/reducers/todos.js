import expect from 'expect'

import todos from '../../../src/js/reducers/todos.js'
import K from "../../../src/js/constants/"
import todo_meta from "./todo_meta"

describe("todos.js", () => {

  it("returns empty object with todo_meta & todo_data_array properties when unknown action is given", () => {
    const newState = todos(undefined, {});
    expect(newState).toBeA(Object)
    expect(newState.todo_meta).toBeA(Object)
    expect(newState.todos_data_array).toBeA(Array)
  });

  describe("request", () => {
    it("on fetch request it updates the todo_meta", () => {

      const newState = todos(undefined, {
        type: K.FETCH_TODO_REQUEST
      });

      expect(newState.todo_meta.status).toEqual("requesting");

    });
  });

});
