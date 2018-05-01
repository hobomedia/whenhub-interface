import { combineReducers, Reducer } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import login, { TState as LoginState } from './login';

const rootReducer = combineReducers({
  login,
  routing: routing as Reducer<any>
});

export interface IState {
  login: LoginState;
}

export default rootReducer;
