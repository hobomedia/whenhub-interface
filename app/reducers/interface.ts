import { IAction } from '../actions/helpers';
import { call, message, incomingInterface } from '../actions/interface';

export type TState = Object;

export default function startInterface(state: Object = { start: null }, action: IAction) {
    if (call.test(action)) {
        return {
            ...state,
            start: action.payload
        }
    }
    if (message.test(action)) {
        console.log('Got here', action.payload);
        return {
            ...state,
            message: action.payload
        }
    }
    if (incomingInterface.test(action)) {
        return {
            ...state,
            incomingInterface: action.payload
        }
    }
    return state;

}
