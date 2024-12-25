import React, { useContext } from 'react'
import { Global } from './Context';

const Users = () => {

    let users = useContext(Global);
    console.log(users);
    
    return (<>
        {
            users?.map((ele)=>{
                let {id,ename} = ele;
                return(
                    <section id={id}>
                        <h1>{ename}</h1>
                    </section> 
                )
            })
        }
        
        
    </>)
}

export default Users
