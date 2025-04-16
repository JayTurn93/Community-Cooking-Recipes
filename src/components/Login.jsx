function Login() {
    return (
        <div>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
                <div className="formarrange">
                    <span className="login">
                        <label htmlFor="Email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </span>
                    <span className="login">
                        <label htmlFor="Password">Password: </label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </span>
                    <div className="forgotpassword"><a href="#">Forgot password? Click here to recover account.</a></div>
                    <button className="submitbutton">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login;