export default function LoginForm() {
    return <div className="login-screen">
        <div className="login-title">
            <h1>Project Management</h1>
            <h5>Sign in to your account</h5>
        </div>
        <div className="login-form">
            <div>
                <label>E-mail</label>
                <input placeholder="Enter your email" type="text" />
            </div>
            <div>
                <label>Senha</label>
                <input placeholder="Enter your password" type="password" />
            </div>
        </div>
        <div className="login-extra">
            <span><input type="checkbox" /> Remember me</span>
            <span>Forgot password?</span>
        </div>
        <button>Sign in</button>
        <span>Don't have an account? Create account</span>
    </div>
}