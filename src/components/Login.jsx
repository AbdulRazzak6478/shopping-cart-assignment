import React, { useState } from "react";
import './login.css';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function onSubmit(e) {
    e.preventDefault();
    setEmail('');
    setPassword('')
  }
  return (
    <>
      <div className="container">
        <div className="login">
          <h1>Login to Shop</h1>
          <form action="">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter your Email ..."
                onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password "
                  onChange={(e)=>setPassword(e.target.value)}
                  />
              </div>
            <input type="submit" className="submit" onClick={onSubmit} />
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
