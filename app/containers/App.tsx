import * as React from 'react';
// import * as injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import {MuiThemeProvider, lightBaseTheme} from "material-ui/styles";
let styles = require('../components/Home.scss');
// const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class App extends React.Component<any> {
  render() {
    return (
      // <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div className={styles.box}>
          {this.props.children}
        </div>
      // </MuiThemeProvider>
    );
  }
}
