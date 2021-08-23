import React, { Component } from "react";

class NoteBookRow extends Component {
  render() {
    return (
      <div>
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

export default NoteBookRow;
