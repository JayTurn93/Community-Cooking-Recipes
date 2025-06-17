import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function Login({user, setUser}) {
    const [password, setPassword] = useState("");
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const myClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const navigate = useNavigate();

    // console.log("logintest", user);

    const handleUserChange = (e) => {
      e.preventDefault()
      setUser(e.target.value)
  }
  const handlePasswordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    console.log("trying to",user, password);
    const body = {
        user: e.target.user,
        password: e.target.user
    }
    JSON.stringify(body)
    fetch(`${API_BASE_URL}/auth/login/local`, {method: "POST"})
    .then(localStorage.setItem("user", JSON.stringify(user)))
    .then(navigate("/admin"))
    .catch(console.error)
    
  }
const googleLogin = (e) => {
    fetch(`${API_BASE_URL}/auth/login/google`, {method: "GET"})
}

    return (
        <>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
                <a href={`${API_BASE_URL}/auth/login/google`}><button>Google</button></a>
                <div className="formarrange">
                    <form onSubmit={handleSubmitLogin}>
                        <span className="login">
                            <label htmlFor="Email">Email: </label>
                            <input type="email" name="email" id="email" placeholder="Email" onChange={handleUserChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="Password">Password: </label>
                            <input type="password" name="password" id="password" placeholder="Password" onChange={handlePasswordChange}/>
                        </span>
                        <div className="forgotpassword"><a href="#">Forgot password? Click here to recover account.</a></div>
                        <button className="submitbutton" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;