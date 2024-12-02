import ChildA from "./ChildA";

const Parent = ()=>{

    let data = "Hello World .... !!";

    return(
        <div>
            <h1>hello This is Parent</h1>
            <ChildA x={data} />
        </div>
    )
}
export default Parent;