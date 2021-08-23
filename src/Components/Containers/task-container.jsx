import React, { Component } from "react";
import DeleteLogo from "../Assets/SVG/delete-task-logo.svg";

import EditLogo from "../Assets/SVG/edit-task-logo.svg";
import PropsLogo from "../Assets/SVG/task-props-logo.svg";
import OpenLogo from "../Assets/SVG/open-file-logo.svg";

class TaskContainer extends Component {
  render() {
    return (
      <div id="task-container">
        <div className="task-card">
          <div className="task-header">
            <h1 className="task-name san-28-bold">Task 1</h1>

            <p className="task-description rob-14-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Dignissimos nemo accusamus sed cum quasi modi ipsam expedita
              perferendis earum illo!
            </p>
          </div>

          <div className="options just-space">
            <img src={DeleteLogo} alt="" />
            <img src={EditLogo} alt="" />
            <img src={PropsLogo} alt="" />
            <img src={OpenLogo} alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default TaskContainer;
