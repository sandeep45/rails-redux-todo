import expect from 'expect'

import * as actions from '../../../src/js/actions'
import K from "../../../src/js/constants/"

import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initialStoreData = {
  todo_meta: {},
  todos_data_array: []
};

var store;

beforeEach(() => {
  store = mockStore(initialStoreData);
});

describe("editTodo", () => {
  it("dispatches 'requestToEditTodo' upon being called", () => {
    store.dispatch(actions.editTodo(1, "new"));
    expect(store.getActions()).toInclude(actions.requestToEditTodo())
  });

  it("dispatches 'successfullyEditedTodo' after ajax successfully updates todo", () => {

    nock(/http:\/\/localhost/, {"encodedQueryParams":true})
    .put('/notes/1.json', {"comment":"new"})
    .reply(200, {
      "comment":"new",
      "id":1
    });

    return store.dispatch(actions.editTodo(1, "new")).
      then(() => {
        expect(store.getActions()[1].type).toEqual(actions.successfullyEditedTodo().type)
      })
  });

  it("dispatches 'failedToEditTodo' after ajax fails to update todo", () => {

    nock(/http:\/\/localhost/, {"encodedQueryParams":true})
    .put('/notes/1.json', {"comment":"new"})
    .reply(500, { });

    return store.dispatch(actions.editTodo(1, "new")).
      then(() => {
        expect(store.getActions()[1].type).toEqual(actions.failedToEditTodo().type)
      })
  });
});

describe("requestToEditTodo", () => {
  it("returns a json with edit request type", () => {
    expect(actions.requestToEditTodo()).toBeA(Object)
    expect(actions.requestToEditTodo()).toInclude({type: K.EDIT_TODO_REQUEST})
  })
});

describe("successfullyEditedTodo", () => {
  it("returns a json with success type and todo with edited object", () => {
    expect(actions.successfullyEditedTodo()).toBeA(Object)
    expect(actions.successfullyEditedTodo({id:5})).
      toInclude({type: K.EDIT_TODO_SUCCESS, todo: {id:5}})
  })
});

describe("failedToEditTodo", () => {
  it("returns a json with fail type and message", () => {
    expect(actions.failedToEditTodo()).toBeA(Object)
    expect(actions.failedToEditTodo("500")).
      toInclude({type: K.EDIT_TODO_FAILURE, message: "500"})
  })
});




