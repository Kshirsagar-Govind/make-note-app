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
                className="input-class san-24-bold"
              />
            </div>

            <div className="input-div">
              <label htmlFor="password" className="input-label san-24-light">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="text"
                className="input-class san-24-bold"
              />
            </div>
            <div className="submit-div">
              <input
                className="button_1 san-24-bold"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <div className="">
            <h4 className="san-18-bold">
              Need New Account
              <a href="" className="san-18-bold">
                {" "}
                Signup
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
