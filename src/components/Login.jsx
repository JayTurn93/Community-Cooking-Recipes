import { useNavigate } from "react-router-dom";


function Login({user, setUser}) {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleUserChange = (e) => {
      setUser(e.target.value)
    }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    const body = {
        email: e.target.email.value,
        password: e.target.password.value
    }
    fetch(`${API_BASE_URL}/auth/login/local`, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)})
    .then(() => {
      localStorage.setItem("user", JSON.stringify(user))
      navigate("/admin")
    })
    .catch(console.error)
    
  }




    return (
        <>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
                <a href={`${API_BASE_URL}/auth/login/google`} className="googleButton">Sign In With Google</a>
                <div className="formarrange">
                    <form onSubmit={handleSubmitLogin}>
                        <span className="login">
                            <label htmlFor="email">Email: </label>
                            <input type="email" name="email" id="email" placeholder="Email" onChange={handleUserChange}/>
                        </span>
                        <span className="login">
                            <label htmlFor="password">Password: </label>
                            <input type="password" name="password" id="password" placeholder="Password" />
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