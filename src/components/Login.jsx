import { useState } from "react";
import { useNavigate  } from "react-router-dom";


function Login({user, setUser}) {
    const [password, setPassword] = useState("");
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();



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




    return (
        <>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
                <a href={`${API_BASE_URL}/auth/login/google`}><button className="googleButton">Sign In With Google</button></a>
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
                        <div className="login"><a href="/signup">Don't Have an Account?</a></div>
                        <button className="login" >Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;