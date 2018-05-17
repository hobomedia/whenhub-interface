import { IAction } from '../actions/helpers';
import { history } from '../actions/account';

export type TState = Object;

export default function getHistory(state: Object = {history: null}, action: IAction) {
    if(history.test(action)){
        return {
            ...state,
            history: action.payload
        }
    }
    return state;

}

