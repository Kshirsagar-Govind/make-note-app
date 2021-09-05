export const getAllNotebooks = (user_id) => {

    return async dispatch => {

        const res = await fetch(
            `http://localhost:6500/notebook/get-all-notebooks-data/${user_id}`
        );
        const allNotebooksData = await res.json();
        dispatch({ type: "GET_ALL_NOTEBOOKS_DATA", payload: allNotebooksData });
    };
};

export const getSingleNotebook = (notebook_id) => {

    return async dispatch => {

        const res = await fetch(
            `http://localhost:6500/notebook/get-single-notebook-data/${notebook_id}`
        );
        const singleNotebookData = await res.json();
        dispatch({ type: "GET_SINGLE_NOTEBOOK_DATA", payload: singleNotebookData });
    };
};
