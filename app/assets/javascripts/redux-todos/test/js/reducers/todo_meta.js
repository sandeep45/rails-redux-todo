import expect from 'expect'

import todo_meta from '../../../src/js/reducers/todo_meta.js'
import K from "../../../src/js/constants/"

describe("todos_meta.js", () => {

  it("returns empty object when unknown action is given", () => {
    const newState = todo_meta(undefined, {});
    expect(newState).toBeA(Object)
  });

  describe("request", () => {
    it("sets status to 'requesting' when made a request action", () => {
      const newState = todo_meta([], {
        type: K.FETCH_TODO_REQUEST,
      });

       expect(newState.status).toEqual("requesting");
    });
  });

  describe("success", () => {
    it("sets status to 'completed' when made a success action", () => {
      const newState = todo_meta([], {
        type: K.FETCH_TODO_SUCCESS,
      });

       expect(newState.status).toEqual("completed");
    });
  });

  describe("failure", () => {
    it("sets status to failed when made a failure action", () => {
      const newState = todo_meta([], {
        type: K.FETCH_TODO_FAILURE,
        message: "500 response"
      });

       expect(newState.status).toEqual("failed");
       expect(newState.message).toEqual("500 response");
    });
  });

});
