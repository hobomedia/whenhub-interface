import { IAction } from '../actions/helpers';
import { walletAmount } from '../actions/wallet';

export type TState = Object;

export default function getWalletAmount(state: Object = {walletAmount: null}, action: IAction) {
    if(walletAmount.test(action)){
        return {
            ...state,
            walletAmount: action.payload
        }
    }
    return state;
}
