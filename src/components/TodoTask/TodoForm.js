import React, { useState } from "react";
import { PlusLg } from "react-bootstrap-icons";
import { Container, Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

const TodoForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <Container>
            <Card style={{ marginRight: "30%", marginLeft: "30%" }}>
              <input
                value={input}
                onChange={handleChange}
                name="text"
                className="todo-input edit"
              />
              <Button
                onClick={handleSubmit}
                style={{ backgroundColor: "green" }}
              >
                Update
              </Button>
            </Card>
          </Container>
        </>
      ) : (
        <>
          <input
            placeholder="Add some text"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
          />
          <Button onClick={handleSubmit}>
            <PlusLg />
          </Button>
        </>
      )}
    </form>
  );
};

export default TodoForm;
