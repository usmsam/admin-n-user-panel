import { createStore, combineReducers } from 'redux';
import { commentReducer } from './reducers/commentReducer';
import { loginReducer } from './reducers/loginReducer';
import { popupReducer } from './reducers/popupReducer';

const rootReducer = combineReducers({
  popup: popupReducer,
  login: loginReducer,
  comment: commentReducer
})
export const store = createStore(rootReducer)