import {style} from "./alltodos.module.css";

export default function AllTodo(prop) {
    let {allTodos,deleteTodo,editTodo} = prop;
    return (
        <div>
            {
                allTodos.map((ele)=>{
                    console.log(ele);
                    let {text, id} = ele;
                    return(
                        <section key={id}>
                            <h1>{text}</h1>
                            <button onClick={()=>editTodo(id)} >edit</button> <br />
                            <button onClick={()=>deleteTodo(id)} >delete</button>
                        </section>
                    )
                })
            }
        </div>
    )
}
