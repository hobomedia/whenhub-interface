import { IAction } from '../actions/helpers';
import { login } from '../actions/login';

export type TState = Object;

export default function saveLogin(state: Object = {accessToken: null, profile: null}, action: IAction) {
    if(login.test(action)){
        console.log("reducer", action)
        return {
            ...state,
            ...action.payload
        }
    }
    return state;

}