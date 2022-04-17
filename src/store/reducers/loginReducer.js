const initialState = {
    loggined: false
}
export const login = 'qwerty12345'
const pass = '123456789'

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            if (action.payload.login === login && action.payload.pass === pass) {
                return {...state, loggined : true}
            }else{
                return {...state, loggined : false, error:true}
            }
        default:
            return state;
    }
}