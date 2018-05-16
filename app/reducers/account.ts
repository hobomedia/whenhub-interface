import { IAction } from '../actions/helpers';
import { account } from '../actions/account';

export type TState = Object;

export default function getHistory(state: Object = {history: null}, action: IAction) {
    if(account.test(action)){
        return {
            ...state,
            history: action.payload
        }
    }
    return state;

}
