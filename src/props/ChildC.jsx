import React from 'react'

export default function ChildC({setterFun}) {
    let data = "hello React";

    return (
        <div>
            <h1>Child C </h1>
            <button onClick={()=> setterFun(data)} >send to parent</button>            
        </div>
    )
}
