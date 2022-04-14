import axios from "axios";

export const getAllNotes = (notebook_id) => {

    return async dispatch => {

        const res = await axios.get(
            `http://localhost:5500/notebook/get-all-notes-data/${notebook_id}`
        );
        // const allNotesData = await res.json();
        dispatch({ type: "GET_ALL_NOTES_DATA", payload: res });
    };
};

export const getSingleNote = (notebook_id, note_id) => {

    return async dispatch => {

        const res = await axios.get(
            `http://localhost:5500/notebook/get-single-note-data/${notebook_id}/${note_id}`
        );
        const singleNotebookData = await res.json();
        dispatch({ type: "GET_SINGLE_NOTE_DATA", payload: singleNotebookData });
    };
};
