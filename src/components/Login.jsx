import React, { useState } from "react";
import './login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <div className="container">
        <div className="login">
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your Email ..."
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Email</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password "
            />
            <input type="submit" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
