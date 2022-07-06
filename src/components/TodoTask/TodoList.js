import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import TodoForm from "./TodoForm";
import Todo from "./Todo.js";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    console.log(todo);
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };
  const updateTodo = (todoId, newValue) => {
    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);
    setTodos(removedArr);
  };
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div>
      <Card
        className="text-center"
        style={{ marginRight: "30%", marginLeft: "30%" }}
      >
        <Card.Header>
          <List />
          Just Another Todo App
        </Card.Header>
        <Card.Body>
          <Card.Title>Welcome!</Card.Title>
          <Card.Text>To get started, add some items to your list:</Card.Text>
          <TodoForm onSubmit={addTodo} />
        </Card.Body>
      </Card>
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoList;
