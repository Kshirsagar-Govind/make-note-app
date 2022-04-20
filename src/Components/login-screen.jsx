import React, { Component } from "react";
import "./CSS/registration-page.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const navigate = useHistory();
  const loginUser = async data => {
    console.log(data);
    try {
      const res = await axios.post(
        `http://localhost:6500/make-note/login-user`,
        data
      );
      console.log(res);
      if (res.data.code == "404") {
        alert("User Does Not Exists");
      } else if (res.data.code == "400") {
        alert("Invalid Creds");
      } else if (res.data.code == "200") {
        alert("Login Success");
        navigate.push(`/dashboard/${res.data.user.user_id}`);
      }
    } catch (error) {
      console.log(error);
      alert("Failed");
    }
  };
  return (
    <div id="registration-page" className="page pxy-30">
      <div class="main-nav-bar">
        <div class="d-flex">
          <div class="brand san-40-bold pure">Make Note</div>
        </div>
        <div class="hr-line" />
      </div>

      <div className="sinup-n-login">
        <div className="login-div pxy-30 ">
          <form onSubmit={handleSubmit(loginUser)}>
            <div className="input-div">
              <label htmlFor="email" className="input-label san-24-light">
                Email
              </label>

              <input
                {...register("email", { required: true })}
                type="text"
                className="input-class san-18-bold"
              />
            </div>
            <div className="input-div">
              <label htmlFor="password" className="input-label san-24-light">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                className="input-class san-18-bold"
              />
            </div>
            <div className="input-div">
              <label htmlFor="c_password" className="input-label san-24-light">
                Remember Me
              </label>

              <input
                {...register("c_password")}
                type="checkbox"
                className="checkbox-class san-24-bold"
              />
            </div>
            <br /> <br />
            <div className="submit-div">
              <input
                type="submit"
                className="button_1 san-24-light"
                value="Login"
              />
            </div>
            <br /> <br />
            <div className="hr-line-light" />
            <div className="just-center">
              <h4 className="san-16-bold">
                Need New Account
                <Link to="/registration-page"> Signup</Link>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
