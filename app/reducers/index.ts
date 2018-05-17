import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';
import getExperts, { TState as ExpertState } from './experts';
import getHistory, { TState as HistoryState } from './account';
import getWalletAmount, { TState as WalletState } from './wallet';

const rootReducer = combineReducers({
  login,
  getExperts,
  getHistory,
  getWalletAmount,
  routing: routing as Reducer<any>
});

export interface IState {
  experts: ExpertState,
  history: HistoryState,
  amount: WalletState,
  login: LoginState;
}

export default rootReducer;
