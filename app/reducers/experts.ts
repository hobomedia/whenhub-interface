import { IAction } from '../actions/helpers';
import { experts } from '../actions/experts';

export type TState = Object;

export default function getExperts(state: Object = {experts: null}, action: IAction) {
    if(experts.test(action)){
        return {
            ...state,
            experts: action.payload
        }
    }
    return state;

}
