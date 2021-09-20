import React, { Component } from "react";
import BackLogo from "./Assets/SVG/back-logo.svg";
import axios from "axios";
import RenameLogo from "./Assets/SVG/rename-logo.svg";
import { Link } from "react-router-dom";

class NotePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: "",
    };
  }
  componentDidMount() {
    console.log(this.props.match.params);
    this.setState({ note: this.props.match.params.note });
  }

  onChangeNote = e => {
    this.setState({ note: e.target.value });
  };

  onSubmit = async () => {
    const data = { note: this.state.note };
    const note_id = this.props.match.params.note_id;
    const notebook_id = this.props.match.params.notebook_id;

    const res = await axios.post(
      `http://localhost:6500/notebook/save-note/${notebook_id}/${note_id}`,
      data
    );
    alert("Note Saved Success");
  };

  render() {
    return (
      <div id="note-page" className="page">
        <div className="note-header just-space">
          <Link to="/">
            <img src={BackLogo} alt="" />
          </Link>

          <h3 className="san-28-bold">Notebook</h3>

          <button
            type="submit"
            className="button_1 san-24-light"
            onClick={this.onSubmit}
          >
            Save
          </button>
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
            value={this.state.note}
            onChange={e => {
              this.onChangeNote(e);
            }}
          />
        </div>
      </div>
    );
  }
}

export default NotePage;
