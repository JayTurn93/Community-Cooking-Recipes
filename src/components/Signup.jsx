import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup({user, setUser}) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

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
    //   console.log("trying to",user, password, firstName, lastName);
      const body = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
    //   JSON.stringify(body)
      fetch(`${API_BASE_URL}/auth/register`, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)},)
      .then(JSON.stringify(body))
      .then(localStorage.setItem("user", JSON.stringify(user)))
    //   console.log(user,password)
      .then(navigate("/admin"))
      .catch(console.error)
      
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
                            <input type="fistName" name="firstName" id="firstName" placeholder="" onChange={handleFirstNameChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="lastName" name="lastName" id="lastName" placeholder="" onChange={handleLastNameChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="Email">Email: </label>
                            <input type="email" name="username" id="username" placeholder="" onChange={handleUserChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="Password">Password: </label>
                            <input type="password" name="password" id="password" placeholder="" onChange={handlePasswordChange}/>
                        </span>
                        <button type="submit" className="submitbutton">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
