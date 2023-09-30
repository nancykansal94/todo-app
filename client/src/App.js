import { CreateTodo } from "./components/createTodo";
import { ShowTodoList } from "./components/showTodoList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
        .get("http://localhost:8500/api/todo")
        .then((res) => {
            console.log(res.data);
            setTodos(res.data);
        }) 
        .catch((err) => {
            console.log(err);
        });
  }, []);

  return (
    <div className="app-contents">
      <ShowTodoList todos={todos} onDelete1={(todo) => {
        const index = todos.findIndex((t) => {
            return t._id === todo._id
        })
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
      }}/>
      <CreateTodo onCreate={(todo) => {
        // todos.push(todo);
        // setTodos(todos) 
        setTodos([...todos, todo])
      }}/>
    </div>
  );
}

export default App;
