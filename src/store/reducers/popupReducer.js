
const initialState = {
    status: true
}

export const popupReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_POPUP':
            return {...state, status : !state.status}
        default:
            return state;
    }
}