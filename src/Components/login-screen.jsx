import React, { Component } from "react";
import "./CSS/registration-page.css";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const loginUser = data => {
    console.log(data);
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
                {...register("c_password", { required: true })}
                type="checkbox"
                className="checkbox-class san-24-bold"
              />
            </div>
            <br /> <br />
            <div className="submit-div">
              <input
                className="button_1 san-24-light"
                type="submit"
                value="Login"
              />
            </div>
            <br /> <br />
            <div className="hr-line-light" />
            <div className="just-center">
              <h4 className="san-16-bold">
                Need New Account
                <a href="/registration-page" className="san-18-bold primary">
                  {" "}
                  Signup
                </a>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
