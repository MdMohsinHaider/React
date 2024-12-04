import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB.jsx";
import ChildC from "./ChildC.jsx";

const Parent = ()=>{

    let data = [10,20,30,40,50,60];
    let user = {id:1,ename:"Jone"}

    function Dispaly(){
        console.log("I am Dispaly Function");
        
    }

    let [state,setState] = useState("Parent");

    return(
        <div>
            <h1>hello This is Parent</h1>
            <ChildA propVal={{data,user}} />
            <ChildB fun = {Dispaly()} />
            <ChildC setterFun={setState} />
            {state}
        </div>
    )
}
export default Parent;