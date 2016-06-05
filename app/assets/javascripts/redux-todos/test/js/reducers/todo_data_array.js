import expect from 'expect'

import todos_data_array from '../../../src/js/reducers/todos_data_array.js'
import K from "../../../src/js/constants/"

describe("todos_data_array.js", () => {

  it("returns empty array when unknown action is given", () => {
    const newState = todos_data_array(undefined, {});
    expect(newState).toBeA(Array)
  });

  describe("fetch success", () => {
    it("save state to the array of new data passed in", () => {

      const newTodo1 = {
        id: 1,
        comment: 1,
        created_at: 1,
        updated_at: 1
      };

      const newState = todos_data_array([], {
        type: K.FETCH_TODO_SUCCESS,
        todos: [
          newTodo1
        ]
      });

       expect(newState.length).toEqual(1);
       expect(newState[0].title).toEqual(1);
    });
  });

  describe("create success", () => {
    it("adds the newly created todo to the state which has an array of todos", () => {

      const newTodo1 = {
        id: 1,
        comment: 1,
        created_at: 1,
        updated_at: 1
      };

      const newState = todos_data_array([], {
        type: K.CREATE_TODO_SUCCESS,
        newTodo: newTodo1
      });

       expect(newState.length).toEqual(1);
       expect(newState[0].title).toEqual(1);
    });
  });

  describe("delete success", () => {
    it("adds the newly created todo to the state which has an array of todos", () => {

      const existingTodo1 = {
        id: 1,
        title: 1,
        created_at: 1,
        updated_at: 1
      };

      const existingTodo2 = {
        id: 2,
        title: 2,
        created_at: 2,
        updated_at: 2
      };

      const existingTodo3 = {
        id: 3,
        title: 3,
        created_at: 3,
        updated_at: 3
      };

      const newState = todos_data_array([existingTodo1, existingTodo2, existingTodo3], {
        type: K.DELETE_TODO_SUCCESS,
        id: 2
      });

       expect(newState.length).toEqual(2);
    });
  });

  describe("edit success", () => {
    it("updates the todo which has been updated ", () => {

      const existingTodo1 = {
        id: 1,
        title: 1,
        created_at: 1,
        updated_at: 1
      };

      const existingTodo2 = {
        id: 2,
        title: 2,
        created_at: 2,
        updated_at: 2
      };

      const existingTodo3 = {
        id: 3,
        title: 3,
        created_at: 3,
        updated_at: 3
      };

      const updatedTodo = {
        id: 2,
        comment: 22,
        created_at: 22,
        updated_at: 22
      };


      const newState = todos_data_array([existingTodo1, existingTodo2, existingTodo3], {
        type: K.EDIT_TODO_SUCCESS,
        todo: updatedTodo
      });

      expect(newState[1].created_at).toEqual(22);
    });
  });
});
