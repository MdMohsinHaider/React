import React, { createContext } from 'react'
import ContestChildA from './ContestChildA'



// Step 1:-  creating A context and return context Object
export let GlobalData = createContext();


function ContestParent() {

    console.log(GlobalData); // it will print context object

    let data =[
        {id:1, text:"Hello"},
        {id:2, text:"Hii"},
    ]

    return (
        <div>
            {/* Step 2:- provideing a context */}
            <GlobalData.Provider value={data}>
                <ContestChildA />
            </GlobalData.Provider>
        </div>
    )
}

export default ContestParent

// what is rect and 
// feteres of react
// Diff type componetents
// 