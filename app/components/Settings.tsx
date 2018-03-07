import * as React from 'react';
import Nav from './Nav';

let styles = require('./Home.scss');

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
            Settings
        </div>   
      </div>    
    );
  }
}
