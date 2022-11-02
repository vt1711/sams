import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../updaterecords/addform/FormInput";
import FormLabel from "../updaterecords/addform/FormLabel";
import "./login.css";
import { UserContext } from "../../App";

const Login = () => {
  const navigate = useNavigate();
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");

  const { state, dispatch } = useContext(UserContext);

  const userAuthenticate = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userid,
        password,
      }),
    });
    const data = res.json();
    console.log("....login res....", data);

    if (res.status === 400 || !data) {
      window.alert("Invalid credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Sign in success");
      navigate("/viewrecords/graphicalview");
    }
  };

  return (
    <>
      <div className="logindiv">
        <h1> Welcome to Society Account Management System </h1>
        <h4 className="h4login">Kindly Login to proceed</h4>
        <div className="loginformdiv">
          <form method="POST">
            <FormLabel inputfor="UserId" class="loginlabel" />
            <FormInput
              onchange={(value) => {
                setUserid(value);
              }}
              class="logininput logininputuserid"
              inputforid="UserId"
              inputtype="text"
            />{" "}
            <br />
            <br />
            <FormLabel
              inputfor="Password"
              class="loginlabel loginlabelpassword "
            />
            <FormInput
              onchange={(value) => {
                setPassword(value);
              }}
              class="logininput"
              inputforid="Password"
              inputtype="password"
            />
            <button
              onClick={(e) => {
                userAuthenticate(e);
              }}
              className="loginbutton"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
