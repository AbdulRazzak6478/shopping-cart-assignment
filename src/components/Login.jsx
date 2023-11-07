import React, { useState } from "react";
import "./login.css";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();
    //     const obj = JSON.stringify({
    //       username: "mor_2314",
    //       password:  "83r5^_"
    //   })
    //     console.log('JSON obj : ',obj)
    //     const usersName = JSON.stringify({ name: 'John Doe' });
    //     const customConfig = {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    // };
    //     const result = await axios.post('https://fakestoreapi.com/auth/login', obj, customConfig);
    // const result = await axios.post('https://fakestoreapi.com/auth/login',obj)
    // console.log('result : ',result)
    //   fetch('https://fakestoreapi.com/auth/login',{
    //     method:'POST',
    //     body:JSON.stringify({
    //         username: "mor_2314",
    //         password: "83r5^_"
    //     })
    // })
    //     .then(res=>res.json())
    //     .then(json=>console.log(json))
    setEmail("");
    setPassword("");
  };
  return (
    <>
      <div className="container">
        <div className="login">
          <h1>Login to Shop</h1>
          <form action="">
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="text"
                value={email}
                placeholder="Enter your UserName ..."
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
