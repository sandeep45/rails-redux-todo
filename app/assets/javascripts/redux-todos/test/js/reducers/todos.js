import expect from 'expect'

import todos from '../../../src/js/reducers/todos.js'
import K from "../../../src/js/constants/"

describe("todos.js", () => {

  it("returns empty array when unknown action is given", () => {
    const newState = todos(undefined, {});
    expect(newState).toBeA(Array)
  });

  describe("create", () => {
    it("adds a new item to the state array", () => {
      const newTitle = "My first todo";

      const newState = todos([], {
        type: K.TODO_CREATE,
        title: newTitle
      });

       expect(newState[0].title).toEqual(newTitle);
       expect(newState.length).toEqual(1);
       expect(newState[0].id).toEqual(1);
    });

    it("adds a new item to the state array", () => {
      const newTitle = "My first todo";

      const newState = todos([], {
        type: K.TODO_CREATE,
        title: newTitle
      });

       expect(newState[0].title).toEqual(newTitle);
       expect(newState.length).toEqual(1);
       expect(newState[0].id).toBeGreaterThan(0);
    });

    it("adds multiple items to the state array", () => {

      const newState1 = todos([], {
        type: K.TODO_CREATE,
        title: "ABC"
      });

      const newState2 = todos(newState1, {
        type: K.TODO_CREATE,
        title: "XYZ"
      });

      const newState3 = todos(newState2, {
        type: K.TODO_CREATE,
        title: "LRM"
      });

      expect(newState3.length).toEqual(3);
    });
  });

  describe("destroy", () => {

    it("removed the middle item", () => {
      const newState = todos([
          {
            id: 1,
            title: "a"
          },
          {
            id: 2,
            title: "b"
          },
          {
            id: 3,
            title: "c"
          }
        ],
        {
          type: K.TODO_DESTROY,
          id: 2
        }
      );
      expect(newState.length).toEqual(2);
      expect(newState).toExclude({
        id: 2,
        title: "b"
      });
    });

  });

  describe("edit", () => {

    it("edits the middle item", () => {
      const newState = todos([
          {
            id: 1,
            title: "a"
          },
          {
            id: 2,
            title: "b"
          },
          {
            id: 3,
            title: "c"
          },
          {
            id: 4,
            title: "d"
          },
          {
            id: 5,
            title: "e"
          }
        ],
        {
          type: K.TODO_EDIT,
          id: 3,
          title: "yo yo"
        }
      );
      expect(newState.length).toEqual(5);
      expect(newState).toInclude({
        id: 3,
        title: "yo yo"
      });
    });

  });


});
