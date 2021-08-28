const getNotebooksData = (state = "", action) => {

    switch (action.type) {
        case "GET_ALL_NOTEBOOKS_DATA":
            // console.log(action.payload, "action.payload");
            return action.payload;

        case "GET_SINGLE_NOTEBOOK_DATA":
            // console.log(action.payload, "action.payload");
            return action.payload;

        default:
            // console.log("default state");
            return state;
    }
}


export default getNotebooksData;

