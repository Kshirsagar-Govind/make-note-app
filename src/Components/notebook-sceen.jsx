import React, { Component } from "react";
import TaskContainer from "./Containers/task-container";
import NewFile from "./Assets/SVG/new-file-logo.svg";
import DotsLogo from "./Assets/SVG/dots-logo.svg";

import EditLogo from "./Assets/SVG/edit-logo.svg";
import DeleteLogo from "./Assets/SVG/delete-logo.svg";
import AddLogo from "./Assets/SVG/add-logo.svg";
import UserLogo from "./Assets/SVG/user-logo.svg";

import { Link } from "react-router-dom";
import "./CSS/main.css";
import { AddNotebook } from "./Containers/popups";

class NotebookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      showNewNotebook: false,
    };
  }

  showOptions = () => {
    this.state.toggle
      ? (document.getElementById("option-popup").style.display = "none")
      : (document.getElementById("option-popup").style.display = "block");

    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <div id="notebook-page" className="page">
        <div className="d-flex">
          <div className="side-menu">
            <Link to="/">
              <div class="brand san-28-bold pure">Make Note</div>
            </Link>

            <div className="menus">
              <ul>
                <li class="san-24-bold active-menu">First Notebook</li>

                <li class="san-24-bold menu">First Notebook</li>

                <li class="san-24-bold menu">First Notebook</li>
                <li class="san-24-bold menu">First Notebook</li>
                <li className="just-center">
                  <img src={AddLogo} alt="" />
                </li>
              </ul>
            </div>
            <div className="side-menu-footer">
              <Link to="/profile-page">
                <img src={UserLogo} alt="" />
                <h1 className="san-24-bold grey">Profile</h1>
              </Link>
            </div>
          </div>
          <div className="right-view-section">
            <div className="header-section just-space">
              <h3 className="san-36-bold">Notebooke Name</h3>
              <img src={DotsLogo} alt="" onClick={this.showOptions} />
            </div>
            <div className="note-card">
              <Link to="/note-page">
                <TaskContainer />
              </Link>

              <img src={NewFile} alt="" />
            </div>
          </div>
        </div>
        <div id="option-popup">
          <ul>
            <li className="san-18-bold">
              <img src={EditLogo} alt="" /> Rename{" "}
            </li>
            <li className="san-18-bold">
              <img src={DeleteLogo} alt="" />Delete{" "}
            </li>
            <li
              className="san-18-bold"
              onClick={() => {
                this.showOptions();
                this.setState({
                  showNewNotebook: !this.state.showNewNotebook,
                });
              }}
            >
              <img src={AddLogo} alt="" />
              Add New Notebook{" "}
            </li>
          </ul>
        </div>
        {/* <AddNotebook /> */}
        {this.state.showNewNotebook ? <AddNotebook /> : ""}
      </div>
    );
  }
}

export default NotebookPage;
