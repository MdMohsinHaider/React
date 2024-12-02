import { useState } from "react";

const Heart = ()=>{

    let [count, setCount]=useState(0);
    return(
        <center>
            <div>
            <h1>💖{count}</h1>
            <button onClick={()=> setCount(count+1)} >Click to Like</button>
            <button onClick={()=> {
                if(count>0) setCount(count -1)
            }}>Click to Dislike</button>
            <button onClick={()=> setCount(0)}>Click to Reset</button>
        </div>
        </center>
    )
}
export default Heart;