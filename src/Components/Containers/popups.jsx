import React, { Component } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const AddNotebook = ({ user_id }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = async data => {
    console.log(data, user_id);
    const res = await axios.post(
      `http://localhost:6500/notebook/create-notebook/${user_id}`,
      data
    );
    console.log(res);
    alert(`New notebook ${data.notebook_title} Added !`);
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

export const RenameNotebook = ({ user_id, notebook_id }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    await axios.post(
      `http://localhost:6500/notebook/rename-notebook/${notebook_id}`,
      data
    );

    alert("Notebook Renamed Success !");
  };

  return (
    <div id="edit-popup">
      <h1 className="san-24-bold primary">Rename Notebook</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name" className="popup-input-label san-18-bold">
          New name
        </label>
        <input
          type="text"
          {...register("notebook_title", { required: true })}
          className="popup-input-class san-16-light"
        />
        <div className="">
          <div className="button_wrapper">
            <input
              className="button_1 san-16-bold"
              type="submit"
              value="Rename"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export const DeleteNotebook = ({ notebook_id }) => {
  const deleteNotebook = async () => {
    const res = await axios.post(
      `http://localhost:6500/notebook/delete-notebook/${notebook_id}`
    );
    alert("Notebook Deleted Success !");
  };
  return (
    <div id="edit-popup">
      <div className="input-div">
        <label htmlFor="Name" className="san-24-light">
          Delete this notebook permanently?
        </label>
      </div>
      <div className="">
        <div className="button_wrapper">
          <button className="button_1 san-16-bold" onClick={deleteNotebook}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export const RenameNote = ({ user_id, notebook_id }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {};

  return (
    <div id="edit-popup">
      <h1 className="san-24-bold primary">Rename Note</h1> <br />
      <form onSubmit="">
        <label htmlFor="Name" className="popup-input-label san-18-bold">
          New name
        </label>
        <input type="text" className="popup-input-class san-16-light" />
        <div className="">
          <div className="button_wrapper">
            <input
              className="button_1 san-16-bold"
              type="submit"
              value="Rename"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

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
