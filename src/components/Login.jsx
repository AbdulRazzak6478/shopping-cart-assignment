import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { toast } from 'react-hot-toast';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))



    //     const customConfig = {
    //     headers: {
    //     'Content-Type': 'application/json'
    //     }
    // };
    // const result = await axios.post('https://fakestoreapi.com/users',customConfig,{
    //         body:JSON.stringify(
    //             {
    //                 email:'abdul@gmail.com',
    //                 username:'abdul',
    //                 password:'12345',
    //                 name:{
    //                     firstname:'abdul',
    //                     lastname:'razzak'
    //                 },
    //             }
    //         )
    //     })
          
    //     console.log('result : ',result);



        const obj = JSON.stringify({
          username: "mor_2314",
          password: "83r5^_"
      })
        console.log('JSON obj : ',obj)
        const customConfig = {
        headers: {
        'Content-Type': 'application/json'
        }
    };
    const result = await axios.post('https://fakestoreapi.com/auth/login', obj, customConfig);
    console.log('result : ',result)
    setEmail("");
    setPassword("");
    toast.success("Login Successfully !");
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
