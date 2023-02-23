import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">BUZZzz..</span>
        <span className="register">LogIn</span>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="E-Mail" />
          <input type="password" placeholder="Password" />

          <button>Sign In</button>
          {err && <span> Something Went Wrong </span>}
        </form>
        <p>
          Don't have an Account?{" "}
          <Link
            to={"/register"}
            style={{ color: "aqua", textDecoration: "none" }}
          >
            Register
          </Link>
        </p>
      </div>
      <p style={{
        color: "aqua",
        fontSize: "15px",
        position:"absolute",
        bottom:"7.5%"
      }}>&copy;Deepjais <span style={{fontWeight:"bold"}}>2023</span> </p>
    </div>
  );
};

export default Login;
