import * as React from 'react';
const styles = require('../components/Home.scss');
import { saveLogin } from '../actions/login';
import { connect } from 'react-redux';



@(connect() as any)
export default class App extends React.Component<any, any> {
  componentWillMount() {
    // Handle Auth
    let authToken = localStorage.getItem('access_token');
    if (authToken != null) {
      this.props.dispatch(saveLogin({
        token: authToken
      }));
    }
  }
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.logo}>
          <a href="https://interface.whenhub.com"><img src="../resources/Interface-Logo-White.png" /></a>
        </div>
        {this.props.children}
      </div>
    );
  }
}