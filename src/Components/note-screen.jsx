import React, { Component } from "react";
import BackLogo from "./Assets/SVG/back-logo.svg";
import RenameLogo from "./Assets/SVG/rename-logo.svg";

class NotePage extends Component {
  render() {
    return (
      <div id="note-page">
        <div className="note-header just-space">
          <img src={BackLogo} alt="" />
          <h3 className="san-28-bold">Notebook</h3>
          <img src={RenameLogo} alt="" />
        </div>
        <div className="hr-line" />
        <div className="note">
          <textarea
            className="san-24-regular"
            resize="none"
            name="note"
            id="note-area"
            cols="500"
            rows="40"
          />
        </div>
      </div>
    );
  }
}

export default NotePage;
