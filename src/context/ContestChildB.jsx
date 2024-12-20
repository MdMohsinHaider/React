import React, { useContext } from 'react'
import { GlobalData } from './ContestParent'

function ContestChildB() {

    // Step 3: - consuming context
    let val = useContext(GlobalData);
    console.log(val);

    return (
        <div>
            <h1>Child B Consuming data from context</h1>
            {
                val.map((ele)=>{
                    let {id,text} =ele;
                    return(
                        <section key={id}>
                            <h3>{text}</h3>
                        </section>
                    )
                })
            }
        </div>
    )
}

export default ContestChildB
