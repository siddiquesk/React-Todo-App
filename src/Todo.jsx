import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Todo() {
  let [todos, setTodo] = useState([
    { task: "task", id: uuidv4(), isDone: false },
  ]);
  let [newtodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodo((previousTodo) => {
      return [...previousTodo, { task: newtodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  let deleteTodo = (id) => {
    setTodo((previousTodo) => previousTodo.filter((todo) => todo.id !== id));
  };

  let toggleDone = (id) => {
    setTodo((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      })
    );
  };

  let uppercaseAll = (id) => {
    setTodo((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toUpperCase(),
          };
        }
        return todo;
      })
    );
  };

  let lowercaseAll = (id) => {
    setTodo((previousTodo) =>
      previousTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            task: todo.task.toLowerCase(),
          };
        }
        return todo;
      })
    );
  };

  return (
    <>
      <div className="container">
        <h2>My Todo App</h2>
        <div className="Todo">
          <input
            type="text"
            placeholder="Enter Your Task"
            value={newtodo}
            onChange={updateTodoValue}
          />
          <button onClick={addNewTask}>Add Task</button>
          <hr />
          <h4>Task Todo</h4>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}>
                {todo.task}
                <button
                  className="deleteTodo"
                  onClick={() => deleteTodo(todo.id)}>
                  Delete
                </button>
                <button id="done" onClick={() => uppercaseAll(todo.id)}>
                  Uppercase
                </button>
                <button id="lower" onClick={() => lowercaseAll(todo.id)}>
                  Lowercase
                </button>
                <button
                  id="line"
                  onClick={() => toggleDone(todo.id)}
                  style={{
                    backgroundColor: todo.isDone ? "#C7253E" : "#1F4529",
                    color: "white",
                  }}>
                  {todo.isDone ? "Undone" : "Done"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Todo;
