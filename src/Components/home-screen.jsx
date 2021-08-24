import React, { Component } from "react";
import UserLogo from "./Assets/SVG/user-logo.svg";
import AddLogo from "./Assets/SVG/add-logo.svg";
import "./CSS/main.css";
import NoteBookRow from "./Containers/note-list-row";
import { Link } from "react-router-dom";

class HomeScreen extends Component {
  render() {
    return (
      <div className="home-page page">
        <div class="main-nav-bar ">
          <div class="d-flex">
            <Link to="/profile-page">
              <img class="px-20" src={UserLogo} alt="" />
            </Link>

            <div class="brand san-40-bold pure">Make Note</div>
            <img class="px-20" src={AddLogo} alt="" />
          </div>
          <div class="hr-line" />
        </div>
        <div className="dashboard">
          <Link to="/notebooks-page">
            <NoteBookRow />
          </Link>

          <Link to="/notebooks-page">
            <NoteBookRow />
          </Link>

          <Link to="/notebooks-page">
            <NoteBookRow />
          </Link>

          <Link to="/notebooks-page">
            <NoteBookRow />
          </Link>
        </div>
      </div>
    );
  }
}

export default HomeScreen;
