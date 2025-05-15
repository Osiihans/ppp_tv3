export const Login = () => {
    return (
        <div className="login-signupContainer">
            <div className="login-signup-inputs">
                <h1>Login</h1>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
                <i className="fa fa-lock"></i>
                <i className="fa fa-user"></i>
            </div>
            <div className="banner-section">
                <img src="https://picsum.photos/200/300" alt=""/>
            </div>
        </div>
    )
}