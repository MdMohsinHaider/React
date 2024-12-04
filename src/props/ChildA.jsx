const ChildA = (x)=>{
    let {dbdata} = x;
    let {propVal:{data,user:{id,ename}}} = x;
    console.log(data,id,ename);
    
    return(
        <div>
            <h1>Hello This is ChildA {dbdata}</h1>
            <h1>Hello This is ChildA {data}</h1>
            <h1>Hello This is ChildA {id}</h1>
            <h1>Hello This is ChildA {ename}</h1>
        </div>
    )
}
export default ChildA;


// const ChildA = ({dbdata})=>{
//     return(
//         <div>
//             <h1>Hello This is ChildA {dbdata}</h1>
//         </div>
//     )
// }
// export default ChildA;