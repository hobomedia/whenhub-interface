import * as React from 'react';
let styles = require('../components/Home.scss');

export default class App extends React.Component<any> {
  render() {
    return (
        <div className={styles.box}>
          {this.props.children}
        </div>
    );
  }
}
