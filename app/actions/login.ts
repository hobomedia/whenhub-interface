import { actionCreator } from './helpers';
import { actionCreatorVoid } from './helpers'; 

export const login = actionCreator('SAVE_LOGIN');
export const logout = actionCreatorVoid('SAVE_LOGOUT');

export function saveLogin(args: any = null) {
    return (dispatch: Function, getState: Function ) => {
        dispatch(login(args));
    };
}

export function saveLogout() {
    return (dispatch: Function, getState: Function ) => {
        dispatch(logout());
    }
}