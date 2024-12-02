import { useState } from "react";


const Counter = ()=>{
    console.log("Counter Components");
    let [count,setCount] = useState(0);
    return(
        <center>
            <div>
                <h1>Counter {count}</h1>
                <button onClick={()=> setCount(count + 1)}>increment</button>
                <button onClick={()=> {
                    if (count >0)setCount(count -1)
                }} >decrement</button>
                <button onClick={()=> setCount(0)} >rest</button>
            </div>
        </center>
    )

}
export default Counter;
