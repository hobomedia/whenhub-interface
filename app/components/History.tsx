import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';
import { getHistory } from '../actions/account';
// const Axios = require('axios');
let styles = require('./Home.scss');
let historyStyles = require('./History.scss');

export class History extends React.Component<any, {sidebarOpen: boolean, loading: boolean, interfaces: any}>{ 
  constructor(props:any){
    super(props)
    this.state = {
      sidebarOpen: true,
      loading: true,
      interfaces: []
    }
  }

  componentWillMount() {
    if(this.props.profile != null){
      let args = {
        bearer: this.props.bearer,
        profile: this.props.profile
      }
      this.props.dispatch(getHistory(args))
    };
  }

  convertDate(ISODate: any) {
    let date = new Date(ISODate);
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dt = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes().toString();
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = parseInt(minutes) < 10 ? '0'+minutes : minutes;
    let strTime = hours + ':' + minutes + ' ' + ampm;

    return month + '/'+dt + '/'+ year + '   ' + strTime;
  }

  show(history: any) {
    if(history == null || history.length < 1){
      return <div></div>
    }else if (history != null) {
      return history.map((call: any, index: any) => {
        return(
          <div key={index} className={historyStyles.cell}>
          <div className={historyStyles.line}></div>
          <img className={historyStyles.picture} src={call.caller.picture} alt="Avatar"/>
          <div className={historyStyles.info}>
            <div className={historyStyles.name}>{call.caller.name}</div>
            <div >{call.interface.expertise.expertise}</div>
            <div className={historyStyles.total}>W{call.interface.contractTotal}</div>
            <div className={historyStyles.time}>{this.convertDate(call.interface.created)}</div>
          </div>
        </div>

        )
      })
    }
  }

  render() {
      // console.log(this.props.history)
      // const none = <div>There are no interfaces to show</div>  
      // const interfaces = this.props.history.map((call: any, index: any) => {
      //   if(this.props.history.length > 1) {
      //     return (
            // <div key={index} className={historyStyles.cell}>
            //   <div className={historyStyles.line}></div>
            //   <img className={historyStyles.picture} src={call.caller.picture} alt="Avatar"/>
            //   <div className={historyStyles.info}>
            //     <div className={historyStyles.name}>{call.caller.name}</div>
            //     <div >{call.interface.expertise.expertise}</div>
            //     <div className={historyStyles.total}>W{call.interface.contractTotal}</div>
            //     <div className={historyStyles.time}>{this.convertDate(call.interface.created)}</div>
            //   </div>
            // </div>
      //     )
      //   }else {
      //     return (
      //       <div>
      //         There are no interfaces to show
      //       </div>
      //     )
      //   }
      // })
    return (
      <div>
        <Nav 
          button={"back"}
          page={"History"}
        />
        <div className={styles.container}>
            <div className={historyStyles.history} style={this.props.history != null? {height: 'auto'}: {height: '100%'}}>
              <div className={historyStyles.interfaceContainer}>
                {/* {interfaces.length > 1? interfaces: none} */}
                {this.show(this.props.history)}
              </div>
            </div>
        </div>   
      </div>    
    );
  }
}

const mapStateToProps = function (props: any, state: any) {
  return {
      profile: props.login.profile,
      token: props.login.token,
      bearer: props.login.bearer,
      history: props.getHistory.history
  }

}
export default connect(mapStateToProps)(History);
