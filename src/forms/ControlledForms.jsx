import { useState } from "react"

export default function ControlledForms() {

    let [username, setUsername] = useState("");
    let [useremail, setUseremail] = useState("@gmail.com");
    let [userpassword, setUserpassword] = useState("");

    let handleUsername = (e) => {
        setUsername(e.target.value)

    }
    let handleUseremail = (e) => {
        setUseremail(e.target.value);

    }
    let handleUserpassword = (e) => {
        setUserpassword(e.target.value);
    }

    let formSubmit = (e)=>{
        e.preventDefault();
        console.log(username,useremail,userpassword);
        setUsername("");
        setUseremail("");
        setUserpassword("");
        
    }

    return (
        <>
            <div>
                <h1>Controlled Forms</h1>
                <form onSubmit={formSubmit} action="">
                    <label>Name</label>
                    <input type="text" value={username} onChange={handleUsername}></input> <br /><br />

                    <label>Email</label>
                    <input type="email" value={useremail} onChange={handleUseremail} ></input> <br /><br />

                    <label>password</label>
                    <input type="password" value={userpassword} onChange={handleUserpassword} ></input> <br /><br />

                    <button type="submit">submit</button>
                </form>
            </div>
        </>
    )
}
