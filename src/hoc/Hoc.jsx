const Hoc = (WrappedCom) => {
    let data = "hello";
    return function () {
        return <WrappedCom data={data} />
    }
}

export default Hoc
