import { LOGIN, LOGOUT, ADD_COMMENT, VERIFY_COMMENT, TOGGLE_POPUP , VERIFY_CLEAR } from '../types/types'

export function loginAction(login, password) {
    return {
        type: LOGIN,
        payload: { login: login, pass: password }
    }
}
export function togglePopupAction() {
    return { type: TOGGLE_POPUP }
}
export function logoutAction() {
    return { type: LOGOUT }
}
export function addCommentAction(loginText, passwordText) {
    if (loginText.trim() !== '' && passwordText.trim() !== '') {
        return {
            type: ADD_COMMENT,
            payload: { title: loginText, text: passwordText }
        }
    }
}
export function verifyCommentAction(id) {
    return {
        type: VERIFY_COMMENT,
        payload: id
    }
}
export function verifyClearAction(id) {
    return {
        type: VERIFY_CLEAR,
        payload: id
    }
}