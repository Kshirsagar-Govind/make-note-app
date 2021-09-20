import React, { Component } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

export const AddNotebook = ({ user_id, closePopup }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = async data => {
    console.log(data, user_id);
    const res = await axios.post(
      `http://localhost:6500/notebook/create-notebook/${user_id}`,
      data
    );
    console.log(res);
    closePopup();
  };

  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
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
            maxlength="18"
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

export const RenameNotebook = ({ user_id, notebook_id, closePopup }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {
    await axios.post(
      `http://localhost:6500/notebook/rename-notebook/${notebook_id}`,
      data
    );

    closePopup();
  };

  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
      <h1 className="san-24-bold primary">Rename Notebook</h1> <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="Name" className="popup-input-label san-18-bold">
          New name
        </label>
        <input
          type="text"
          maxlength="18"
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

export const DeleteNotebook = ({ notebook_id, closePopup }) => {
  const deleteNotebook = async () => {
    const res = await axios.post(
      `http://localhost:6500/notebook/delete-notebook/${notebook_id}`
    );
    closePopup();
  };
  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
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

export const AddNote = ({ notebook_id, closePopup }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const submit = async data => {
    console.log(data);
    const res = await axios.post(
      `http://localhost:6500/notebook/create-note/${notebook_id}`,
      data
    );
    console.log(res);

    closePopup();
  };

  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
      <h3 className="san-24-bold primary">Add New Note</h3>

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
            maxlength="18"
            {...register("note_title", { required: true })}
            className="popup-input-class san-16-light"
          />
        </div>

        <div className="input-div">
          <label
            htmlFor="notebook_title"
            className="popup-input-label san-18-bold"
          >
            Description
          </label>
          <input
            type="text"
            {...register("note_desc", { required: true })}
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

export const RenameNote = ({ user_id, notebook_id, closePopup }) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async data => {};

  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
      <h1 className="san-24-bold primary">Rename Note</h1> <br />
      <form onSubmit="">
        <label htmlFor="Name" className="popup-input-label san-18-bold">
          New name
        </label>
        <input type="text" className="popup-input-class san-16-light" />
        <div className="">
          <div className="button_wrapper">
            <input
              maxlength="18"
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

export const DeleteNote = ({ note_id, notebook_id, closePopup }) => {
  const deleteNote = async () => {
    console.log(note_id, notebook_id);
    await axios.post(
      `http://localhost:6500/notebook/delete-note/${notebook_id}/${note_id}`
    );

    closePopup();
  };
  return (
    <div id="edit-popup">
      <div className="cross" onClick={closePopup}>
        <h1>X</h1>
      </div>
      <div className="input-div">
        <label htmlFor="Name" className="san-24-light">
          Delete this note permanently?
        </label>
      </div>
      <div className="">
        <div className="button_wrapper">
          <button className="button_1 san-16-bold" onClick={deleteNote}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
