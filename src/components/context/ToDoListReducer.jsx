import { ADD_TASK, DELETE_ALL, DELETE_TASK } from "../../actionTypes/actions";

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TASK:

            return [
                ...state,
                action.payload
            ]
        case DELETE_TASK:
            return state.filter(item => item.id !== action.payload)



        case DELETE_ALL:
            return state.filter(item => "")



        default:
            return state;
    }
}

export default reducer;  