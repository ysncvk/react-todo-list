import TodoItem from "./TodoItem";

/* eslint-disable react/prop-types */
export default function TodoList({ todos, deleteTodo, toogleToDo }) {
    return(
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="">Mark all</label>
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
              <TodoItem {...todo} key = {todo.id} deleteTodo = {deleteTodo} toogleToDo = {toogleToDo}/>
              );
            })}
            
          </ul>
        </section>
    )
}