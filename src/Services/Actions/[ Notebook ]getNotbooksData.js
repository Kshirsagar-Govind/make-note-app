import axios from "axios";

export const getAllNotebooks = (user_id) => {

    return async dispatch => {

        const res = await axios.get(
            `${process.env.REACT_APP_HOST}/notebook/get-all-notebooks-data/${user_id}`
        );
        // const allNotebooksData = await res.json();
        dispatch({ type: "GET_ALL_NOTEBOOKS_DATA", payload: res });
    };
};

export const getSingleNotebook = (notebook_id) => {

    return async dispatch => {

        const res = await axios.get(
            `${process.env.REACT_APP_HOST}/notebook/get-single-notebook-data/${notebook_id}`
        );
        // const singleNotebookData = await res.json();
        dispatch({ type: "GET_SINGLE_NOTEBOOK_DATA", payload: res });
    };
};
