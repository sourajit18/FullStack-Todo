import "./Displaytodos.css"

export function Displaytodos({todos}){
    return(
        <div className="webpage">
            {todos.map((todo)=>{
                return <div className="container">
                    <div className="todotitle todo">Task: {todo.title}</div>
                    <div className="tododesc todo">Description :{todo.description}</div>
                    <div className="todoID todo">task ID:{todo._id}</div>
                    <button >{todo.completed ? "completed" : "Mark as completed"}</button>
                </div>
            })}
        </div>
    )
}