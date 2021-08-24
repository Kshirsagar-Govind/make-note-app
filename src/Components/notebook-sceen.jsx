import React, { Component } from "react";
import TaskContainer from "./Containers/task-container";
import NewFile from "./Assets/SVG/new-file-logo.svg";
import { Link } from "react-router-dom";

class NotebookPage extends Component {
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
              </ul>
            </div>
          </div>
          <div className="right-view-section">
            <div className="header-section">
              <h3 className="san-36-bold col-center">Notebooke Name</h3>
            </div>
            <div className="note-card">
              <Link to="/note-page">
                <TaskContainer />
              </Link>

              <img src={NewFile} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotebookPage;
