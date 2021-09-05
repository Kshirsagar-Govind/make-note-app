import React, { Component } from "react";
import TaskContainer from "./Containers/task-container";
import NewFile from "./Assets/SVG/new-file-logo.svg";
import DotsLogo from "./Assets/SVG/dots-logo.svg";
import { getAllNotebooks } from "../Services/Actions/[ Notebook ]getNotbooksData.js";
import EditLogo from "./Assets/SVG/edit-logo.svg";
import DeleteLogo from "./Assets/SVG/delete-logo.svg";
import AddLogo from "./Assets/SVG/add-logo.svg";
import UserLogo from "./Assets/SVG/user-logo.svg";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import "./CSS/main.css";
import {
  AddNotebook,
  DeleteNotebook,
  RenameNote,
  RenameNotebook,
} from "./Containers/popups";

class NotebookPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNotebook: "",
      selectedNotebook_id: "",
      toggle: false,
      showNewNotebook: false,
      showDeleteNotebook: false,
      showRenameNotebook: false,
      allNotebooks: [],
      selected: 0,
    };
  }
  componentDidMount() {
    // this.props.getAllNotebooks("ID91447095");
    this.getData();
  }
  async getData() {
    const res = await fetch(
      `http://localhost:6500/notebook/get-all-notebooks-data/ID91447095`
    );
    const allNotebooksData = await res.json();
    console.log(allNotebooksData, "allNotebooksData");
    this.setState({
      allNotebooks: await allNotebooksData,
      selectedNotebook: allNotebooksData[0].notebook_title,
      selectedNotebook_id: allNotebooksData[0].notebook_id,
    });
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
    if (this.state.allNotebooks.length == 0) {
      return (
        <div className="">
          <h1>Loading Data... wait</h1>
        </div>
      );
    }
    return (
      <div id="notebook-page" className="page">
        <div className="d-flex">
          <div className="side-menu">
            <Link to="/">
              <div class="brand san-28-bold pure">Make Note</div>
            </Link>

            <div className="menus">
              <ul>
                {this.state.allNotebooks.length > 0 ? (
                  this.state.allNotebooks.map((item, index) => (
                    <li
                      onClick={() => {
                        this.setState({
                          selected: index,
                          selectedNotebook: item.notebook_title,
                          selectedNotebook_id: item.notebook_id,
                        });
                      }}
                      class={
                        index == this.state.selected ? "active-menu" : "menu"
                      }
                    >
                      <h3 className="san-20-bold py-10">
                        {item.notebook_title}
                      </h3>
                    </li>
                  ))
                ) : (
                  console.log("error")
                )}
              </ul>
              <li className="just-center">
                <img
                  onClick={() => {
                    this.setState({
                      showNewNotebook: !this.state.showNewNotebook,
                    });
                  }}
                  src={AddLogo}
                  alt=""
                />
              </li>
            </div>
            <div className="side-menu-footer">
              <Link to="/profile-page">
                <img src={UserLogo} alt="" />
              </Link>
            </div>
          </div>
          <div className="right-view-section">
            <div className="header-section just-space">
              <h3 className="san-36-bold">{this.state.selectedNotebook}</h3>
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
            <li
              className="san-18-bold"
              onClick={() => {
                this.showOptions();
                this.setState({
                  showRenameNotebook: !this.state.showRenameNotebook,
                });
              }}
            >
              <img src={EditLogo} alt="" /> Rename{" "}
            </li>
            <li
              className="san-18-bold"
              onClick={() => {
                this.showOptions();
                this.setState({
                  showDeleteNotebook: !this.state.showDeleteNotebook,
                });
              }}
            >
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
        {this.state.showNewNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <div
                className="cross"
                onClick={() => {
                  this.setState({
                    showNewNotebook: !this.state.showNewNotebook,
                  });
                }}
              >
                <h1>X</h1>
              </div>

              <AddNotebook user_id={"ID91447095"} />
            </div>
          </div>
        ) : this.state.showDeleteNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <div
                className="cross"
                onClick={() => {
                  this.setState({
                    showDeleteNotebook: !this.state.showDeleteNotebook,
                  });
                }}
              >
                <h1>X</h1>
              </div>

              <DeleteNotebook notebook_id={this.state.selectedNotebook_id} />
            </div>
          </div>
        ) : this.state.showRenameNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <div
                className="cross"
                onClick={() => {
                  this.setState({
                    showRenameNotebook: !this.state.showRenameNotebook,
                  });
                }}
              >
                <h1>X</h1>
              </div>

              <RenameNotebook notebook_id={this.state.selectedNotebook_id} />
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    Notebooks: state.Notebooks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllNotebooks: user_id => {
      dispatch(getAllNotebooks(user_id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NotebookPage);
