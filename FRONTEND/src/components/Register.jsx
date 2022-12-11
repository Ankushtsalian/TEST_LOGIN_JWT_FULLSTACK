import Password from "./Password";

const Register = () => {
  return (
    <div className="register-card">
      <h2>Register</h2>
      <h3>Enter your credentials</h3>
      <form className="register-form">
        <input
          spellCheck="false"
          className="control"
          type="text"
          placeholder="Username"
        />
        <Password password="true" />
        <Password reset-password="true" />

        <button className="control" type="button">
          LOGIN
        </button>
      </form>
    </div>
  );
};

export default Register;
