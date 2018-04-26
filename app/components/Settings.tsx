import * as React from 'react';
import Nav from './Nav';
import Switch from 'material-ui/Switch';

let styles = require('./Home.scss');
let settingsStyles = require('./Settings.scss');

export default class Settings extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

    render() {
    return (
      <div>
        <Nav 
          button={"back"}
          page={"Settings"}
        />
        <div className={styles.container}>

            <div className={settingsStyles.settings}>
                <div className={settingsStyles.font}>Minimum Interface duration when you are the expert</div>
                <div>
                  Slider
                </div>
                <div className={settingsStyles.font}>Languages Fluently Spoken</div>
                <div className={settingsStyles.row}> 
                  <div className={settingsStyles.lang}>English</div>
                    <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Spanish</div>
                  <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>French</div>
                    <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

                <div className={settingsStyles.row}>
                  <div className={settingsStyles.lang}>Spanish</div>
                    <div style={{float: "right"}}>
                    <Switch/>
                    </div>
                </div>

            </div>
            {/* </ MuiThemeProvider> */}
        </div>   

      </div>    
    );
  }
}
