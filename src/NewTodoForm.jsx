/* eslint-disable react/prop-types */
import { useState } from "react";

export function NewTodoForm({onSubmit}) {

    

    const [newItem, setNewItem] = useState("");
    

    function handleSubmit(e) {
    e.preventDefault();
    onSubmit(newItem);
    setNewItem("");
  }
    return(
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
    )
}