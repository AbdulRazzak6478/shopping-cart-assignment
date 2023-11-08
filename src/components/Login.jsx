import React, { useState } from "react";
import "./login.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import {Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isNav, setIsNav] = useState(false);

  console.log("props : ", props);

  const onSubmitSuccess = (jwtToken) => {
    // Cookies.set('jwt_token', jwtToken, {
    //   expires: '1',
    // });
    Cookies.set('jwt_token', jwtToken, { expires: 1 });
    const name = Cookies.get('jwt_token');
    console.log('token : ',name)
    setIsNav(true);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    //     const token = Cookies.get('jwt_token')
    //     if (token !== undefined) {
    //       return <Redirect to="/" />
    //     }

    // Sai Kiran12:17
    // import {Redirect} from 'react-router-dom'
    // import Cookies from 'js-cookie'

    const obj = JSON.stringify({
      username: "mor_2314",
      password: "83r5^_",
    });
    console.log("JSON obj : ", obj);
    const customConfig = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await axios.post(
      "https://fakestoreapi.com/auth/login",
      obj,
      customConfig
    );
    console.log("result : ", result);
    onSubmitSuccess(result.data.token);
    setUserName("");
    setPassword("");
    toast.success("Login Successfully !");
  };
  return (
    <>
      {isNav ? (
        <Navigate to="/" replace={true} />
      ) : (
        <div className="container">
          <div className="login">
            <h1>Login to Shop</h1>
            <form action="">
              <div className="email">
                <label htmlFor="email">UserName :</label>
                <input
                  type="text"
                  name="text"
                  value={userName}
                  placeholder="Enter your UserName ..."
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className="password">
                <label htmlFor="password">Password :</label>
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
      )}
    </>
  );
};

export default Login;
