import React, { Component } from "react";
import { useForm } from "react-hook-form";

export const AddNotebook = ({ user_id }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = data => {
    console.log(data);
  };

  return (
    <div id="edit-popup">
      <h3 className="san-24-bold primary">Add New Notebook</h3>

      <form onSubmit={handleSubmit(submit)}>
        <div className="input-div">
          <label
            htmlFor="notebook_title"
            className="popup-input-label san-18-bold"
          >
            Name
          </label>
          <input
            type="text"
            {...register("notebook_title", { required: true })}
            className="popup-input-class san-16-light"
          />
        </div>

        <div className="button_wrapper">
          <input type="submit" className="button_1 san-16-bold" value="Add" />
        </div>
      </form>
    </div>
  );
};

export class RenameNotebook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edit-popup">
        <div className="input-div">
          <label htmlFor="Name" className="popup-input-label san-18-bold">
            New name
          </label>
          <input type="text" className="popup-input-class san-16-light" />
        </div>
        <div className="submit-div d-flex-ac">
          <h3 className="mxy-30 san-16-bold primary">Cancel</h3>
          <button className="button_1 mxy-30 san-16-bold">Done</button>
        </div>
      </div>
    );
  }
}

export class DeleteNotebook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edit-popup">
        <div className="input-div">
          <label htmlFor="Name" className="san-24-light">
            Delete this notebook permanently?
          </label>
        </div>
        <div className="">
          <div className="button_wrapper">
            <button className="button_1 san-16-bold">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export class RenameNote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edit-popup">
        <h1 className="san-24-bold primary">Rename Notebook</h1> <br />
        <label htmlFor="Name" className="popup-input-label san-18-bold">
          New name
        </label>
        <input type="text" className="popup-input-class san-16-light" />
        <div className="">
          <div className="button_wrapper">
            <button className="button_1 san-16-bold">Rename</button>
          </div>
        </div>
      </div>
    );
  }
}

export class DeleteNote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="edit-popup">
        <div className="input-div">
          <label htmlFor="Name" className="san-24-light">
            Delete this note permanently?
          </label>
        </div>
        <div className="submit-div d-flex-ac">
          <h3 className="mxy-30 san-16-bold primary">Cancel</h3>
          <button className="button_1 mxy-30 san-16-bold">Delete</button>
        </div>
      </div>
    );
  }
}
