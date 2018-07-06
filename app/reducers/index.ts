import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';
import getExperts, { TState as ExpertState } from './experts';
import getHistory, { TState as HistoryState } from './account';
import getWalletAmount, { TState as WalletState } from './wallet';
import startInterface, { TState as InterfaceState } from './interface';

const rootReducer = combineReducers({
  login,
  getExperts,
  getHistory,
  getWalletAmount,
  startInterface,
  routing: routing as Reducer<any>
});

export interface IState {
  experts: ExpertState,
  history: HistoryState,
  amount: WalletState,
  login: LoginState,
  interface: InterfaceState;
}

export default rootReducer;
