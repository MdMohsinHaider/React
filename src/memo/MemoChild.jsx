import React from 'react'

const MemoChild = ({display}) => {
    console.log("Memo Child");
    
    return (
        <div>
            <h1>Child Memo</h1>
        </div>
    )
}

export default React.memo(MemoChild);
