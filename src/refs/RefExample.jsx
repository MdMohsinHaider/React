import {useRef} from "react";

export default function RefExample() {
// console.log(useRef);
let demoRef = useRef();

function changeBG(){
    // console.log(demoRef);
    demoRef.current.style.backgroundColor ="red";
    demoRef.current.style.color ="white";
    
}


    return (
        <div>
            <h1 ref={demoRef} >Learn ref</h1>
            <button onClick={changeBG}>click</button>
            {/* <h2 ref={demoRef}>New Demo</h2>  */}
        </div>
    )
}
