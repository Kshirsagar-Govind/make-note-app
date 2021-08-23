import React, { Component } from "react";
import UserLogo from "../Assets/SVG/user-logo.svg";
import AddLogo from "../Assets/SVG/add-logo.svg";

import EditLogo from "../Assets/SVG/edit-logo.svg";
import DeleteLogo from "../Assets/SVG/delete-logo.svg";

class NoteBookRow extends Component {
  render() {
    return (
      <div>
        <div class="note-item">
          <div class="just-space">
            <h3 class="san-36-regular">1. First Notebook</h3>
            <div class="d-flex">
              <img class="px-20" src={DeleteLogo} alt="" />
              <img src={EditLogo} alt="" />
            </div>
          </div>
        </div>{" "}
        <br />
      </div>
    );
  }
}

export default NoteBookRow;
