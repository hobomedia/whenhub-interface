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
import ReferPage from './components/Refer';

// import Nav from './components/Nav';
// import AwayNav from './components/AwayNav';

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/FindExpert" component={FindExpert}/>
      <Route path="/BeExpert" component={BeExpert} />
      <Route path="/GoOnline" component={GoOnline} />
      <Route path="/Wallet" component={Wallet} />
      <Route path="/Settings" component={Settings} />
      <Route path="/History" component={HistoryPage} />
      <Route path="/Refer" component={ReferPage} />
    </Switch>
  </App>
);
