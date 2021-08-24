import React, { Component } from "react";
import "./CSS/registration-page.css";
import { useForm } from "react-hook-form";

const RegistrationPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const signupUser = data => {
    console.log(data);
  };

  return (
    <div id="registration-page" className="pxy-30 page">
      <div class="main-nav-bar">
        <div class="d-flex">
          <div class="brand san-40-bold pure">Make Note</div>
        </div>
        <div class="hr-line" />
      </div>

      <div className="sinup-n-login">
        <div className="signup-div pxy-30">
          <form onSubmit={handleSubmit(signupUser)}>
            <div className="input-div">
              <label htmlFor="username" className="input-label san-24-light">
                Username
              </label>

              <input
                type="text"
                {...register("username", { required: true })}
                className="input-class san-24-bold"
              />
            </div>

            <div className="input-div">
              <label htmlFor="email" className="input-label san-24-light">
                Email
              </label>

              <input
                {...register("s_email", { required: true })}
                type="text"
                className="input-class san-24-bold"
              />
            </div>

            <div className="input-div">
              <label htmlFor="password" className="input-label san-24-light">
                Password
              </label>

              <input
                {...register("s_password", { required: true })}
                type="text"
                className="input-class san-24-bold"
              />
            </div>

            <div className="input-div">
              <label htmlFor="c_password" className="input-label san-24-light">
                Confirm Password
              </label>

              <input
                {...register("c_password", { required: true })}
                type="text"
                className="input-class san-24-bold"
              />
            </div>
            <div className="submit-div">
              <input
                type="submit"
                className="button_1 san-24-bold"
                value="Sign Up"
              />
            </div>
          </form>
          <div className="">
            <h4 className="san-18-bold">
              Already a user
              <a href="" className="san-18-bold">
                {" "}
                Login
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
