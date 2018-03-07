import * as React from 'react';
import Nav from './Nav';

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
          button={"menu"}
        />
        <div className={styles.container}>
            <div className={settingsStyles.settings}>
                <div className={settingsStyles.font}>Minimum Interface duration when you are the expert</div>
                <div>slider</div>
                <div className={settingsStyles.font}>Languages Fluently Spoken</div>
                <div className={settingsStyles.lang}>English</div>
                <div className={settingsStyles.lang}>Spanish</div>
                <div className={settingsStyles.lang}>French</div>
                <div className={settingsStyles.lang}>Spanish</div>

            </div>
        </div>   
      </div>    
    );
  }
}
