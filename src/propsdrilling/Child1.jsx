import React from 'react'
import Child2 from './Child2'

export default function Child1(x) {

    // console.log(x);
    // console.log(x.data);
    

    return (
        <div>Child1 <hr />  
            <Child2 users ={x.data}/>
        </div>
        
    )
}
