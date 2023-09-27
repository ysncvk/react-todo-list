import { useState } from "react";

import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import TodoList from "./TodoList";

export default function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo (title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toogleToDo (id, completed) {
    setTodos (currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo (id) {
    setTodos (currentTodos => {
      return currentTodos.filter ( todo => todo.id !== id )
    })
  }
  

 
  return (
  
      <section className="todoapp">
        <NewTodoForm onSubmit={addTodo} />
        <TodoList todos = {todos}  deleteTodo = {deleteTodo} toogleToDo = {toogleToDo}/>

        <footer className="footer">
          <span className="todo-count">
            <strong>{todos.length}</strong>
            items left
          </span>

          <ul className="filters">
            <li>
              <button  className="selected">
                All
              </button>
            </li>
            <li>
            <button> Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
          </ul>

          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>

  );
}
