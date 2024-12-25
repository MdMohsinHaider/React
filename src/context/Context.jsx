import React, { createContext } from 'react'


export let Global = createContext();

const Context = ({children}) => {

    let data = [
        {id:1, ename: "John"},
        {id:2, ename: "Doe"}
    ];

    return (
        <Global.Provider value={data}>
            {children}
        </Global.Provider>
    )
}

export default Context
