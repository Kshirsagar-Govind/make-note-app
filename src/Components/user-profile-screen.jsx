import React, { Component } from "react";
import backLogo from "./Assets/SVG/back-logo.svg";
import editLogo from "./Assets/SVG/edit-logo.svg";

import { Link } from "react-router-dom";

class UserProfilePage extends Component {
  render() {
    return (
      <div id="user-profile-page" className="page">
        <div class="main-nav-bar ">
          <div class="d-flex">
            <Link to="/">
              <img src={backLogo} alt="" />
            </Link>

            <div class="brand san-40-bold pure">Make Note</div>
            <img src={editLogo} alt="" />
          </div>
          <div class="hr-line" />
        </div>
        <div className="d-flex">
          <div className="user-data-div">
            <h3 className="san-28-light grey">Name</h3>
            <h3 className="san-28-bold primary">Name</h3>

            <h3 className="san-28-light grey">Email</h3>
            <h3 className="san-28-bold primary">email</h3>

            <h3 className="san-28-light grey">Total Notebooks</h3>
            <h3 className="san-28-bold primary">0</h3>

            <h3 className="san-28-light grey">Total Notes</h3>
            <h3 className="san-28-bold primary">0</h3>
            <button className="button_1 san-24-bold">Change Password</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfilePage;
