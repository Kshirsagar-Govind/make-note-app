import React, { Component } from "react";
import UserLogo from "./Assets/SVG/user-logo.svg";
import AddLogo from "./Assets/SVG/add-logo.svg";
import "./CSS/main.css";

class HomeScreen extends Component {
  render() {
    return (
      <div class="main-nav-bar ">
        <div class="d-flex">
          <img class="px-20" src={UserLogo} alt="" />
          <div class="brand san-40-bold pure">Make Note</div>
          <img class="px-20" src={AddLogo} alt="" />
        </div>
        <div class="hr-line" />
      </div>
    );
  }
}

export default HomeScreen;
