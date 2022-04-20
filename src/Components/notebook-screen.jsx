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
import axios from "axios";
import { Link } from "react-router-dom";
import "./CSS/main.css";
import {
  AddNote,
  AddNotebook,
  DeleteNote,
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
      showNewNote: false,
      showDeleteNotebook: false,
      showRenameNotebook: false,
      allNotebooks: [],
      allNotes: [],
      selected: 0,
      user_id: this.props.match.params.id,
    };
  }
  componentDidMount() {
    this.props.getAllNotebooks("ID63512490");
    this.getData();
    console.log(this.props.match.params.id);
  }
  getData = async () => {
    const res = await axios.get(
      `http://localhost:6500/notebook/get-all-notebooks-data/${this.state
        .user_id}`
    );
    // const allNotebooksData = await res.json();
    console.log(res.data[0].notebooks[0].notes, "allNotebooksData");
    if (res.data.length == 0) return;
    else {
      this.setState({
        allNotebooks: res.data[0].notebooks,
        selectedNotebook: res.data[0].notebooks[0].notebook_title,
        selectedNotebook_id: res.data[0].notebooks[0].notebook_id,
        allNotes: res.data[0].notebooks[0].notes
          ? res.data[0].notebooks[0].notes
          : [],
      });
    }
  };

  showOptions = () => {
    this.state.toggle
      ? (document.getElementById("option-popup").style.display = "none")
      : (document.getElementById("option-popup").style.display = "block");

    this.setState({
      toggle: !this.state.toggle,
    });
  };

  closePopup = () => {
    this.setState({
      showNewNotebook: false,
      showNewNote: false,
      showDeleteNotebook: false,
      showRenameNotebook: false,
    });
  };
  render() {
    // console.log(this.state.allNotebooks);
    // if (this.state.allNotebooks.length == 0) {
    //   return (
    //     <div className="">
    //       <h1>loading</h1>
    //     </div>
    //   );
    // }

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
                          allNotes: item.notes,
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
                  ""
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
              {this.state.allNotes.length > 0 ? (
                this.state.allNotes.map((item, index) => (
                  <TaskContainer
                    reload={() => this.getData()}
                    note={item}
                    notebook_id={this.state.selectedNotebook_id}
                  />
                ))
              ) : (
                ""
              )}

              <img
                src={NewFile}
                alt=""
                onClick={() => {
                  this.setState({
                    showNewNote: true,
                  });
                }}
              />
            </div>
          </div>
        </div>
        {/* Notebok Options Popup ------------>>>> */}
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
        {/* ------------------------------------------------ */}
        {/* <AddNotebook /> */}
        {this.state.showNewNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <AddNotebook
                reload={() => this.getData()}
                closePopup={this.closePopup}
                user_id={this.state.user_id}
              />
            </div>
          </div>
        ) : this.state.showDeleteNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <DeleteNotebook
                reload={() => this.getData()}
                closePopup={this.closePopup}
                notebook_id={this.state.selectedNotebook_id}
              />
            </div>
          </div>
        ) : this.state.showRenameNotebook ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <RenameNotebook
                reload={() => this.getData()}
                closePopup={this.closePopup}
                notebook_id={this.state.selectedNotebook_id}
              />
            </div>
          </div>
        ) : this.state.showNewNote ? (
          <div className="back_popup">
            <div className="edit-popup-div">
              <AddNote
                reload={() => this.getData()}
                closePopup={this.closePopup}
                notebook_id={this.state.selectedNotebook_id}
              />
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
    NotebooksData: state.Notebooks,
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
