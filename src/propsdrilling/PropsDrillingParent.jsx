import React from 'react'
import Child1 from './Child1'

export default function PropsDrillingParent() {

    let user = [
        {id:1, ename:"Jon"},
        {id:2, ename:"Doe"},
    ];


    return (
        <div>PropsDrillingParent <hr />
            <Child1 data={user} />
        </div>
    )
}
