import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const response = await axios.get("/todos");
      setTodos(response.data);
    };
    loadTodos();
  }, []);

  const createTodo = async todoText => {
    const response = await axios.post("/todos", { newTodoText: todoText });
    const newTodo = response.data;
    setTodos(todos.concat(newTodo));
  };

  const completeTodo = async todoId => {
    const response = await axios.put(`/todos/${todoId}`);
    setTodos(response.data);
  };

  const deleteTodo = async todoId => {
    const response = await axios.delete(`/todos/${todoId}`);
    setTodos(response.data);
  };
  return (
    <div>
      <h1>My Todos</h1>
      <NewTodoForm onClickCreate={createTodo} />
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
