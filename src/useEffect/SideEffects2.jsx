import { useEffect } from "react"

const SideEffects2 = () => {

    useEffect(()=>{
        console.log("Mounted");
        
        let s1 = setInterval(()=>{
            console.log("Hello");
        },2000);

        return ()=>{
            console.log("unmounted");
            clearInterval(s1);
        };
    },[])

    return (
        <div>
            <h1>SideEffects2</h1>
        </div>
    )
}

export default SideEffects2