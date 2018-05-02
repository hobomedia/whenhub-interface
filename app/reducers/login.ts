import { IAction } from '../actions/helpers';
import { login } from '../actions/login';
import { logout } from '../actions/login';

export type TState = Object;

export default function saveLogin(state: Object = {token: null, profile: null}, action: IAction) {
    if(login.test(action)){
        return {
            ...state,
            ...action.payload
        }
    }else if (logout.test(action)){
        return {
            ...state, 
            token: null,
            profile: null
        }
    }
    return state;

}
