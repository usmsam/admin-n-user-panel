import { ADD_COMMENT, VERIFY_CLEAR, VERIFY_COMMENT } from "../../components/types/types"


const initialState = [
    {
        id: 1,
        date: Date.now(),
        title: 'first',
        text: 'first first first firstfirst first',
        verify: false
    }

]

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT:

            return [...state, {
                id: state.length + 1,
                date: Date.now(),
                ...action.payload,
                verify: false
            }]

        case VERIFY_COMMENT:
            return state.filter(item => {
                if (item.id === action.payload) {
                    item.verify = true
                }
                return item
            })
        case VERIFY_CLEAR:
            return state.filter(item => {
                if (item.id === action.payload) {
                    item.verify = false
                }
                return item
            })

        default:
            return state;
    }
}