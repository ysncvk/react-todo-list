import { useState } from "react";

import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        
        { id: crypto.randomUUID(), title: newItem, completed: false },
      ];
    });
    setNewItem("");
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
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form  onSubmit={handleSubmit}>
            <input
              id = "001"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              className="new-todo"
              placeholder="What needs to be done?"
              autoFocus
            />
          </form>
        </header>
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="">Mark all</label>
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <li key = {todo.id} className= {todo.completed? "completed" : ""}>
                  <div className="view">
                    <input className="toggle" type="checkbox"
                    onChange={e => toogleToDo(todo.id, e.target.checked)} />
                    <label>{todo.title}</label>
                    <button className="destroy" 
                    onClick={() => deleteTodo(todo.id)}></button>
                  </div>
                </li>
              );
            })}
            
          </ul>
        </section>

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
    </>
  );
}
