import React from 'react'
import Hoc from "./Hoc";

const Child2 = (x) => {
    return (
        <div>
            <h1>HOC Child 2 {x.data}</h1>
        </div>
    )
}

export default Hoc(Child2);
