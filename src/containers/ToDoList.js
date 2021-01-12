import React from "react";
import "../App.css";
import ItemList from "../components/ItemList";

const initialState = {
  counter: -1,
  todos: [],
};

function reducer(state, action) {
  debugger;
  switch (action.type) {
    case "ADD_ITEM": {
      const newCounter =
        state.todos.length === 0 ? (state.counter = 0) : state.counter + 1;
      const newTodo = {
        id: newCounter,
        text: action.text,
      };
      return {
        counter: newCounter,
        todos: [...state.todos, newTodo],
      };
    }

    case "REMOVE_ITEM": {
      const idx = state.todos.findIndex((t) => t.id === action.id);
      const todos = Object.assign([], state.todos);
      todos.splice(idx, 1);
      return {
        counter: state.counter,
        todos: todos,
      };
    }

    default:
      throw new Error();
  }
}
const ToDoList = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [text, setText] = React.useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_ITEM", text });
    setText("");
  };

  const handleRemove = (value) => {
    dispatch({ type: "REMOVE_ITEM", id: value });
  };

  return (
    <div className="mainDiv">
      <input type="text" value={text} onChange={handleChange} />
      <button type="button" onClick={handleSubmit} className="addItem">
        Add Item
      </button>
      {state.todos.length > 0 && (
        <ItemList
          item={state.todos}
          handleRemove={(value) => handleRemove(value)}
        />
      )}
    </div>
  );
};

export default ToDoList;
