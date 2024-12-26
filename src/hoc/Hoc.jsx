const Hoc = (WrappedCom) => {
    let data = "hello";
    console.log("From data HOC ",data);
    
    return function () {
        return <WrappedCom data={data} />
    }
}

export default Hoc
