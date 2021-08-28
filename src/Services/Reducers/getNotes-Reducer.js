const getNotesData = (state = "", action) => {

    switch (action.type) {
        case "GET_ALL_NOTES_DATA":
            // console.log(action.payload, "action.payload");
            return action.payload;

        case "GET_SINGLE_NOTE_DATA":
            // console.log(action.payload, "action.payload");
            return action.payload;

        default:
            // console.log("default state");
            return state;
    }
}


export default getNotesData;

