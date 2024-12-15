import style from "./createTodo.module.css";

export default function CreateTodo(prop) {
    let {todo, handleTodo, creteTodo} = prop;
    return (
        <div id={style.createTodo}>
            <form onSubmit={creteTodo} action="">
                <h2>Crete Todo</h2>
                <input 
                    type="text" 
                    placeholder="todo.." 
                    value={todo} 
                    onChange={handleTodo}
                />
                <button>create</button>
            </form>
        </div>
    )
}
