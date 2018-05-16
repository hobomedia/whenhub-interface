import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';
import getExperts, { TState as ExpertState } from './experts';
import getHistory, { TState as HistoryState } from './account';

const rootReducer = combineReducers({
  login,
  getExperts,
  getHistory,
  routing: routing as Reducer<any>
});

export interface IState {
  experts: ExpertState,
  history: HistoryState,
  login: LoginState;
}

export default rootReducer;
