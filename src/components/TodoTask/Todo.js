import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { Archive, PencilSquare } from "react-bootstrap-icons";
import { Container, Card, Button } from "react-bootstrap";
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <Container>
      <Card style={{ marginRight: "30%", marginLeft: "30%" }}>
        <div
          className={todo.isComplete ? "todo-row complete" : "todo-row"}
          key={index}
        >
          <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
          </div>
          <Button
            onClick={() => removeTodo(todo.id)}
            style={{ backgroundColor: "red" }}
          >
            <Archive />
          </Button>
          ||
          <Button
            onClick={() => setEdit({ id: todo.id, value: todo.text })}
            style={{ backgroundColor: "green" }}
          >
            <PencilSquare />
          </Button>
        </div>
      </Card>
    </Container>
  ));
};

export default Todo;
