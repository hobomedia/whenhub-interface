import * as React from 'react';
import Nav from './Nav';

let styles = require('./Home.scss');
let historyStyles = require('./History.scss');

export default class History extends React.Component<any, {sidebarOpen: boolean}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true
    }
  }

    render() {
    return (
      <div>
        <Nav 
          button={"back"}
          page={"History"}
        />
        <div className={styles.container}>
            <div className={historyStyles.history}>
                History
            </div>
        </div>   
      </div>    
    );
  }
}
