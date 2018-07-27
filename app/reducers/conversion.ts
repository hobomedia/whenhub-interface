import { IAction } from '../actions/helpers';
import { conversion } from '../actions/conversion';

export type TState = Object;


export default function getConversion(state: Object = {conversion: null}, action: IAction) {
    if(conversion.test(action)){
        return {
            ...state,
            conversion: action.payload
        }
    }
    return state;
}

