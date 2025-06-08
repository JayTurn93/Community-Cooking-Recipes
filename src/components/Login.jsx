import { useState } from "react";


function Login({user, setUser}) {
    const [password, setPassword] = useState("");

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
    
  }
    return (
        <>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
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