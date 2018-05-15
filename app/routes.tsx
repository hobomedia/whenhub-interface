import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import FindExpert from './components/FindExpert';
import BeExpert from './components/BeExpert';
import GoOnline from './components/GoOnline';
import Wallet from './components/Wallet';
import Settings from './components/Settings';
import HistoryPage from './components/History';
import Refer from './components/Refer';
import Tour from './components/Tour';
import Tour2 from './components/Tour2';
import Tour3 from './components/Tour3';
import Expert from './components/Expert';
import Call from './components/Call';
import RateCall from './components/RateCall';



export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/FindExpert" component={FindExpert} />
      <Route path="/BeExpert" component={BeExpert} />
      <Route path="/GoOnline" component={GoOnline} />
      <Route path="/Wallet" component={Wallet} />
      <Route path="/Settings" component={Settings} />
      <Route path="/History" component={HistoryPage} />
      <Route path="/Refer" component={Refer} />
      <Route path="/Tour" component={Tour} />
      <Route path="/Tour2" component={Tour2} />
      <Route path="/Tour3" component={Tour3} />
      <Route path="/Expert" component={Expert} />
      <Route path="/Call" component={Call} />
      <Route path="/RateCall" component={RateCall} />

    </Switch>
  </App>
);
