/* eslint-disable react/prop-types */
export default function TodoItem ({ completed, id, title, deleteTodo, toogleToDo }) {
    return (
        <li key = {id} className= {completed? "completed" : ""}>
                  <div className="view">
                    <input className="toggle" type="checkbox"
                    onChange={e => toogleToDo(id, e.target.checked)} 
                    />
                    <label>{title}</label>
                    <button className="destroy" 
                     onClick={() => deleteTodo(id)}
                    >
                    </button>
                  </div>
                </li>
    )
}