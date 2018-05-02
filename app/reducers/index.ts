import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';
// import logout, { TState as LogoutState } from './login';

const rootReducer = combineReducers({
  login,
  // logout,
  routing: routing as Reducer<any>
});

export interface IState {
  // logout: LogoutState,
  login: LoginState;
}

export default rootReducer;
