import { actionCreator } from './helpers';

export const login = actionCreator('SAVE_LOGIN');

export function saveLogin(args: any = null) {
    console.log(args)
    return (dispatch: Function, getState: Function ) => {
        const state = getState()
    
        console.log(state)
        dispatch(login(args));
        

    };
}

