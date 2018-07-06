import { IAction } from '../actions/helpers';
import { call } from '../actions/interface';

export type TState = Object;

export default function startInterface(state: Object = {start: null}, action: IAction) {
    if(call.test(action)){
        return {
            ...state,
            start: action.payload
        }
    }
    return state;

}
