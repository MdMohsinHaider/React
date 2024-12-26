import React, { useCallback, useMemo, useState } from 'react'
import MemoChild from './MemoChild';

const MemoParent = () => {

    let [add, setAdd] = useState(0);
    let [minus, setMinus] = useState(100);

    // function multiply(){
    //     console.log("*********");
    //     return add*10;        
    // }

    //! useMemo(callBack fubction , depandancy)

    let val = useMemo(()=>{
        console.log("*********");
        return add*10;  
    },[add]);


    let display = useCallback(()=>{
        console.log("Dispaly function");
    },[]) // if depandance add when you want to rerande then addeding depandances 

    return (
        <div>
            <h1>Learn UseMemo</h1>
            <h2>
                multiplication {val}
            </h2>

            <h2>
                Addition {add}
                <button onClick={()=> setAdd(add+1)} >Incre</button>
            </h2>

            <h2>
                Subtraction {minus}
                <button onClick={()=> setMinus(minus-1)} >decr</button>
            </h2>
            <MemoChild display ={display}/>
        </div>
    )
}

export default MemoParent
