import { useState } from "react";

const States = () =>{

    let [states,setState] = useState("Hello");
    let [cart,setCart] = useState("add to Cart");

    function btnclick(){
        console.log("bnt Click");
        setState("Byee");
    }

    return(
        <div>
            <h1>State in FBC {states}</h1>
            <button onClick={btnclick} >Click</button>
            <button onClick={()=>{setCart("got to cart")}} >{cart}</button>
        </div>
    )
}
export default States;