import React, { Component, useState } from "react";
import DeleteLogo from "../Assets/SVG/delete-task-logo.svg";
import { Link, useHistory } from "react-router-dom";

import EditLogo from "../Assets/SVG/edit-task-logo.svg";
import PropsLogo from "../Assets/SVG/task-props-logo.svg";
import OpenLogo from "../Assets/SVG/open-file-logo.svg";
import { DeleteNote, RenameNote } from "./popups";

const TaskContainer = ({ note, notebook_id }) => {
  const [ showDeleteNote, setShowDeleteNote ] = useState(false);
  const [ showNoteProperties, setShowNoteProperties ] = useState(false);
  const [ showRenameNote, setShowRenameNote ] = useState(false);
  const history = useHistory();
  const closePopup = () => {
    setShowDeleteNote(false);
    setShowRenameNote(false);
  };

  return (
    <div id="task-container">
      <div className="task-card">
        <div className="task-header">
          <h1 className="task-name san-28-bold">{note.note_title}</h1>

          <p className="task-description rob-14-normal">{note.note_desc}</p>
        </div>

        <div className="options just-space">
          <img
            src={DeleteLogo}
            alt=""
            onClick={() => {
              setShowDeleteNote(true);
            }}
          />
          <img
            src={EditLogo}
            alt=""
            onClick={() => {
              setShowRenameNote(true);
            }}
          />

          <img
            src={PropsLogo}
            alt=""
            onClick={() => {
              setShowNoteProperties(true);
            }}
          />

          <img
            src={OpenLogo}
            alt=""
            onClick={() => {
              history.push(
                `/note-page/${note.note}/${notebook_id}/${note.note_id}`
              );
            }}
          />
        </div>
      </div>
      {showDeleteNote ? (
        <div className="back_popup">
          <div className="edit-popup-div">
            <div
              className="cross"
              onClick={() => {
                setShowDeleteNote(false);
              }}
            >
              <h1>X</h1>
            </div>

            <DeleteNote
              closePopup={closePopup}
              note_id={note.note_id}
              notebook_id={notebook_id}
            />
          </div>
        </div>
      ) : showNoteProperties ? (
        <div className="back_popup">
          <div className="edit-popup-div">
            <div id="edit-popup">
              <div className="input-div px-20">
                <div className="just-space">
                  <label htmlFor="Name" className="san-24-light">
                    Note Tile
                  </label>

                  <label htmlFor="Name" className="san-24-regular">
                    {note.note_title}
                  </label>
                </div>
              </div>
              <div className="input-div px-20">
                <div className="just-space">
                  <label htmlFor="Name" className="san-24-light">
                    Created On
                  </label>

                  <label htmlFor="Name" className="san-20-regular">
                    {note.created_date ? note.created_date : "dd/mm/yyyy"}
                  </label>
                </div>
              </div>
              <div className="">
                <div className="button_wrapper">
                  <button
                    className="button_1 san-16-bold"
                    onClick={() => {
                      setShowNoteProperties(false);
                    }}
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : showRenameNote ? (
        <div className="back_popup">
          <div className="edit-popup-div">
            <div
              className="cross"
              onClick={() => {
                setShowDeleteNote(false);
              }}
            >
              <h1>X</h1>
            </div>

            <RenameNote
              closePopup={closePopup}
              note_id={note.note_id}
              notebook_id={notebook_id}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskContainer;
