const express = require("express");
const uuid = require("uuid");

let fakeTodos = [
  { id: "123", text: "Go to the grocery store", isCompleted: false },

  { id: "234", text: "Learn full-stack development", isCompleted: true },
];
const app = express();
app.use(express.json());

app.get("/todos", (req, res) => {
  res.json(fakeTodos);
});

app.post("/todos", (req, res) => {
  const newTodoText = req.body.newTodoText;
  const newTodo = {
    id: uuid.v4(),
    text: newTodoText,
    isCompleted: false,
  };
  fakeTodos.push(newTodo);
  res.json(newTodo);
});

app.delete("/todos/:todoId", (req,res) => {
  const todoId = req.params.todoId;
  fakeTodos = fakeTodos.filter(todo => todo.id !== todoId);
  res.json(fakeTodos);
});

app.put("/todos/todoId", (req, res) => {
  const todoId = req.params.todoId;
  fakeTodos.find(todo => todo.id === todoId).isCompleted = true;
  res.json(fakeTodos);
});

app.listen(8080, () => {
  console.log("Server is listening on PORT 8080");
});
