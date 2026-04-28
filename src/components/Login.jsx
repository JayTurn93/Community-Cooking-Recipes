import { useNavigate } from "react-router-dom";


function Login({user, setUser}) {
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
    const navigate = useNavigate();

    const handleUserChange = (e) => {
      setUser(e.target.value)
    }
  const handleSubmitLogin = async (e) => {
    e.preventDefault()
    const body = {
        username: e.target.email.value,
        password: e.target.password.value
    }
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login/local`, {method: "POST", headers: {"Content-Type": "application/json"}, credentials: "include", body: JSON.stringify(body)})
      if (!response.ok) {
        const data = await response.json()
        alert(data.error?.message || "Login failed. Please try again.")
        return
      }
      const data = await response.json()
      localStorage.setItem("user", JSON.stringify(data.data?.user))
      navigate("/admin")
    } catch (error) {
      console.error(error)
    }
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