import "./login.css";

const LoginForm = () => {
    return (
        <>
            <div className="form">
            <form className="form">
            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="name@email.com" />
            </div>
            <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button> Login </button>
          <button> Register </button>
          </form>
          </div>
        </>
    )
}

 export default LoginForm; 