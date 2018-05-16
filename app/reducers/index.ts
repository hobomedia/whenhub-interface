import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';
import getExperts, { TState as ExpertState } from './experts';
// import logout, { TState as LogoutState } from './login';

const rootReducer = combineReducers({
  login,
  getExperts,
  routing: routing as Reducer<any>
});

export interface IState {
  experts: ExpertState,
  login: LoginState;
}

export default rootReducer;
