import * as React from 'react';
const styles = require('../components/Home.scss');

export default class App extends React.Component<any> {
  render() {
    return (
        <div className={styles.box}>
          <div className={styles.logo}>
            <a href="https://interface.whenhub.com"><img src="../resources/Interface-Logo-White.png"/></a>
          </div>
          {this.props.children}
        </div>
    );
  }
}
