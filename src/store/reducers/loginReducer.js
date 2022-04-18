const initialState = {
    loggined: false
}
export const login = 'qwerty12345'
const pass = '123456789'

const admin = 'admin'
const adminPass = 'admin'

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.login === login && action.payload.pass === pass) {
                return { ...state, loggined: true, admin: false }
            } else if (action.payload.login === admin && action.payload.pass === adminPass) {
                return { ...state, loggined: true, admin: true }
            } else {
                return { ...state, loggined: false, error: true }

            }

        case 'LOGOUT':
            return { ...state, loggined: false  ,admin:false}
        default:
            return state;
    }
}