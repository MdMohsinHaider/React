import { useEffect, useState } from "react"

export default function SideEffects() {

    //! useEffect(()=>{}, []); // Syntax


    let [count,setCount]=useState(0);

    // Render
    useEffect(() => {
        console.log("Render");
    });


    // MOUnt
    useEffect(()=>{
        console.log("Mount");
        
        // for unmount
        return ()=>{
            console.log("unmount");
        }
    },[]);

    // Update
    useEffect(()=>{
        console.log("Componet Update");
        return ()=>{
            console.log("Preves state was ",count);
            
        }
    },[count]);

    return (
        <div>
            <h1>SideEffects {count}</h1>
            <button onClick={()=>setCount(count = count+1)}>Count</button>
        </div>
    )
}
