function Signup() {
    return (
        <div>
            <h1>Community Cooking</h1>
            <div className="inputbox">
                <h2>Account Login</h2>
                <div className="formarrange">
                <span className="login">
                        <label htmlFor="firstName">First Name: </label>
                        <input type="fistName" name="firstName" id="firstName" placeholder="firstName"/>
                    </span>
                    <span className="login">
                        <label htmlFor="lastName">Last Name: </label>
                        <input type="lastName" name="lastName" id="lastName" placeholder="lastName"/>
                    </span>
                    <span className="login">
                        <label htmlFor="Email">Email: </label>
                        <input type="email" name="email" id="email" placeholder="Email"/>
                    </span>
                    <span className="login">
                        <label htmlFor="Password">Password: </label>
                        <input type="password" name="password" id="password" placeholder="Password"/>
                    </span>
                    <button className="submitbutton">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Signup;
