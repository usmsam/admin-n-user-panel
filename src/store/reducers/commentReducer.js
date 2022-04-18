const initialState = [
    { id: 1, date: Date.now(), title: 'first', text: 'mckmdk', verify: false }

]

export const commentReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, { id: state.length + 1, date: Date.now(), ...action.payload, verify: false }]
        case 'VERIFY':
            return state.filter(item => {
                if(item.id === action.payload){
                    item.verify = !item.verify
                }
                return item
            })

        default:
            return state;
    }
}