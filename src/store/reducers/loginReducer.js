import { LOGIN, LOGOUT } from "../../components/types/types"

const initialState = {
    logined: false,
}
export const login = 'qwerty12345'
const pass = '123456789'

const admin = 'admin'
const adminPass = 'admin'

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case LOGIN :

            if (action.payload.login === login && action.payload.pass === pass) {
                return {
                    ...state,
                    logined: true,
                    admin: false,
                    error: false
                }

            } else if (action.payload.login === admin && action.payload.pass === adminPass) {
                return {
                    ...state,
                    logined: true,
                    admin: true,
                    error: false
                }
            } else {
                return {
                    ...state,
                    logined: false,
                    error: true,
                    admin: false
                }
            }

        case LOGOUT:

            return {
                ...state,
                logined: false,
                admin: false,
                error: false
            }

        default:
            return state;
    }
}