import { useRef } from "react"

export default function UncontrolldForms() {

    let usernameRef =  useRef();
    let emailRef =  useRef();
    let passwordRef =  useRef();


    let formSubmit =(e)=>{
        e.preventDefault();
        let user = {
            username:usernameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
        };
        console.log(user);
        
        
    }

    return (
        <div>
            <h1>UncontrolldForms</h1>
            <form onSubmit={formSubmit} action="">
                <label>Name</label>
                <input type="text" ref={usernameRef}></input> <br /><br />

                <label>Email</label>
                <input type="email" ref={emailRef}></input> <br /><br />

                <label>password</label>
                <input type="password" ref={passwordRef}></input> <br /><br />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}
