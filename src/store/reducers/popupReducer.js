import { TOGGLE_POPUP } from "../../components/types/types";

const initialState = {
    status: false
}

export const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_POPUP:
            return {
                ...state,
                status: !state.status
            }
        default:
            return state;
    }
}