import { useState } from "react"

export default function ControlledForms2() {

    let [formData,setFormData] = useState(
        {
            useremail:"",
            userpassword:""
        }
    );

    let handleFormData = (e)=>{
        let {name,value} = e.target;
        //console.log({[name]:value});
        setFormData({ ...formData, [name]:value});
        
    };

    let formSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
        
    }

    return (
        <>
            <div>
                <h1>Controlled Forms2 - Optimal way</h1> <br />
                <form onSubmit={formSubmit} action="">
                    <label>User Email</label>
                    <input 
                        type="text" 
                        value={formData.useremail}
                        onChange={handleFormData}
                        name="useremail"
                    /> <br /><br />

                    <label>User Password</label>
                    <input 
                        type="password" 
                        value={formData.userpassword} 
                        onChange={handleFormData}
                        name="userpassword"
                    /><br /><br />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}