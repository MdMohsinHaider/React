import React, { useState } from 'react'
import AllTodo from './AllTodo'
import CreateTodo from './CreateTodo'

export default function TodoWrapper() {
    let [todo,setTodo]=useState("");
    let [allTodos,setAllTodos] = useState([{text:"hello world",id:1}]);

    let handleTodo =(e)=>{
        setTodo(e.target.value);
    };

    let creteTodo = (e)=>{
        e.preventDefault();
        // console.log(todo);
        if(todo.trim()!==""){
            let newTodo={
                text:todo,
                id:Date.now()
            };
            console.log(newTodo);
            setAllTodos([...allTodos,newTodo]);
            setTodo("");
        }
        else{
            alert("empity todo");
        }
        
    }
    console.log(allTodos);
    


    let deleteTodo = (id)=>{
        console.log("deleted",id);
        let filteredTodo = allTodos.filter((ele)=>{
            return ele.id !== id;
        });
        setAllTodos(filteredTodo);
    };

    let editTodo = (id)=>{
        console.log("edit",id);
        let editTodo = allTodos.find((ele)=>{
            return ele.id === id;
        });
        console.log(editTodo);
        setTodo(editTodo.text);
        deleteTodo(id);        
    };

    return (
        <>
            <div>
                <AllTodo allTodos ={allTodos} deleteTodo={deleteTodo} editTodo={editTodo} />
                <CreateTodo todo = {todo} handleTodo={handleTodo} creteTodo={creteTodo}/>
            </div>
        </>
    )
}
