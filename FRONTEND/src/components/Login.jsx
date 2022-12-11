import Password from "./Password";

const Login = () => {
  return (
    <div className="login-card">
      <h2>Login</h2>
      <h3>Enter your credentials</h3>
      <form className="login-form">
        <input
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Username"
        />
        <Password password="true" />

        <button className="control" type="button">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Login;
