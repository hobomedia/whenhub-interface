import * as React from 'react';
let styles = require('./Home.scss');


// interface HomeProps {
//   number: number
// }

export default class Home extends React.Component<any, {number2?: number, sidebarOpen: boolean}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true
    }
  }

    render() {
    return (
      <div className={styles.box}>  
        <div className="navbar navbar-inverse navbar-fixed-left">
          <a className="navbar-brand" href="#"><img src={require("../../resources/Interface-Logo-btn.png")}/></a>
          <ul className="nav navbar-nav">
            <li><a href="#"><i className="fa fa-usd"></i><span>WhenWallet</span></a></li>
            <li><a href="#"><i className="fa fa-bars"></i><span>Settings</span></a></li>
            <li><a href="#"><i className="fa fa-history"></i><span>History</span></a></li>
            <li><a href="#"><i className="fa fa-info"></i><span>Tour</span></a></li>
            <li><a href="#"><i className="fa fa-envelope-o"></i><span>Support</span></a></li>
            <li><a href="#"><i className="fa fa-question-circle"></i><span>FAQ</span></a></li>
            <li><a href="#"><i className="fa fa-sign-out"></i><span>Log Out</span></a></li>
          </ul>
        </div>
        <div className={styles.container}>
          <div id={styles.top}>
            <div><img src={require("../../resources/Interface-Logo-btn.png")}/></div>
          </div>
          <div id={styles.bottom}>
            <div><img src={require("../../resources/Interface-Logo-btn.png")}/></div>
          </div>
        </div>       
        </div>
    );
  }
}
