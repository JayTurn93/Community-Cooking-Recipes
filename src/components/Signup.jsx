import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signup({user, setUser}) {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleUserChange = (e) => {
        setUser(e.target.value)
    }

    const handleSubmitSignup = (e) => {
      e.preventDefault()
      const body = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        username: e.target.username.value,
        password: e.target.password.value
      }
      fetch(`${API_BASE_URL}/auth/register`, {method: "POST", headers: {"Content-Type":"application/json"}, body: JSON.stringify(body)})
      .then(() => {
        localStorage.setItem("user", JSON.stringify(user))
        navigate("/admin")
      })
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
                            <input type="text" name="firstName" id="firstName" />
                        </span>
                        <span className="login">
                            <label htmlFor="lastName">Last Name: </label>
                            <input type="text" name="lastName" id="lastName" />
                        </span>
                        <span className="login">
                            <label htmlFor="username">Email: </label>
                            <input type="email" name="username" id="username" onChange={handleUserChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" />
                        </span>
                        <button type="submit" className="submitbutton">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;
