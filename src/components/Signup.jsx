import { useState } from "react";


function Signup({user, setUser}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const handleFirstNameChange = (e) => {
        e.preventDefault();
        setFirstName(e.target.value);
    }
    const handleLastNameChange = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }
    const handleUserChange = (e) => {
        e.preventDefault()
        setUser(e.target.value)
    }
    const handlePasswordChange = (e) => {
      e.preventDefault()
      setPassword(e.target.value)
    }

    const handleSubmitSignup = (e) => {
      e.preventDefault()
      console.log("trying to",user, password, firstName, lastName);
      
    }
    
    return (
        <div>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Create Account</h2>
                <div className="formarrange">
                <form onSubmit={handleSubmitSignup}>
                    <span className="login">
                            <label htmlFor="firstName">First Name: </label>
                            <input type="fistName" name="firstName" id="firstName" placeholder="firstName" onChange={handleFirstNameChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="lastName" name="lastName" id="lastName" placeholder="lastName" onChange={handleLastNameChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="Email">Email: </label>
                            <input type="email" name="email" id="email" placeholder="Email" onChange={handleUserChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="Password">Password: </label>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={handlePasswordChange}/>
                        </span>
                        <button className="submitbutton">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
