import * as React from 'react';
import Nav from './Nav';
import {connect} from 'react-redux';

const Axios = require('axios');
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
    console.log(this.props.profile)
    if(this.props.profile != null){
      const that = this;
      Axios({
        method: 'GET',
        baseURL: 'https://interface-api.whenhub.com/api/Accounts/',
        url:  this.props.profile['https://interface.whenhub.com/winid'] + '/interfaceHistory',
        headers: {
          'Authorization': 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik16QkdSRUU0UVVWQ09EbEZOVVJHTVVRM1F6STRSVEEwUVRWRE5EQTROakZGUXpNeE5VRXpRZyJ9.eyJodHRwczovL2ludGVyZmFjZS53aGVuaHViLmNvbS93aW5pZCI6IjVhNDQwODM0NzJkMmE1MDcwMGJjZjc5MSIsImdpdmVuX25hbWUiOiJUcmFjaSIsImZhbWlseV9uYW1lIjoiRm9uZyIsIm5pY2tuYW1lIjoidHJlLmZvbmcxIiwibmFtZSI6IlRyYWNpIEZvbmciLCJwaWN0dXJlIjoiaHR0cHM6Ly9tZWRpYS5saWNkbi5jb20vZG1zL2ltYWdlL0M0RTAzQVFGaDFNZFVjNXlQMFEvcHJvZmlsZS1kaXNwbGF5cGhvdG8tc2hyaW5rXzEwMF8xMDAvMD9lPTE1MjYzNDI0MDAmdj1hbHBoYSZ0PVUxcHlxNGYzRGZyYUhkbVU4dzY2ZzhwaDBwLWk3dm9mTUNnX2dJMFVDaUkiLCJ1cGRhdGVkX2F0IjoiMjAxOC0wMy0xNVQyMzoxNzowNy45NjJaIiwiZW1haWwiOiJ0cmUuZm9uZzFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImlzcyI6Imh0dHBzOi8vd2hlbmh1Yi5hdXRoMC5jb20vIiwic3ViIjoibGlua2VkaW58VDlFcGxrazB2WCIsImF1ZCI6InVHNmRnNXpJQmQ0NW1wdDNLQWswNVM2cXE1cFBQUm11IiwiaWF0IjoxNTIxMTU1ODI4LCJleHAiOjE1NTI2OTE4MjgsImF0X2hhc2giOiJvcGRHQlVzNEYzUHRuOHRUc1gySHpnIiwibm9uY2UiOiJfN1VGNloyTERYfjloYzU2X01DdjZHdVAxeUd5SUNUNCJ9.u95ButOaH7OEkiUXWPT89u9wu3Y6A-g2H96xS0mzOsgNshVwMm103xtnG6bUYmH3Ab_LYuOGEAyjsoItmRApJxwoSntc_A46iPo6PlK5OEFgxpn7B0rxuhLxJAD8vr6rGhxncUlqTmdWP61YZQQcYVRcaOPvj0XDHG1ei4SO9Bw5uC8CwZG2lKQNbTr42od3hoEjcLrToTyqnNrXCc3kBpSSo_1TuDlubk40oleeAPtFIjP5yMTjlPimYS1iUv-5KVqR3fCSeIJntXeI0Ek3nBXYHJcK9l39msjEzc7eoR5uNzkf53Kqr4zT7iufXodoQkRXWzZ4_qr6XUzg5Qnhlw'
        }
      }).then(function (response: any) {
        console.log(response.data);
        that.setState({interfaces: response.data, loading: false});

      }).catch(function (error: any) {
        console.log(error);
        that.setState({loading: false});
  
      })
    };
  }

  showLoading() {
    if(this.state.loading == true && this.props.profile != null){
      return <i className="fa fa-spinner fa-spin" id={historyStyles.spinner}/>
    }else {
      return 
    }
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

    return month + '-'+dt + '-'+ year + '   ' + strTime;
  }

  render() {
      const none = <div>There are no interfaces to show</div>  
      const interfaces = this.state.interfaces.map((call: any, index: any) => {
        if(this.state.interfaces.length > 1) {
          return (
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
        }else {
          return (
            <div>
              There are no interfaces to show
            </div>
          )
        }
      })
    return (
      <div>
        <Nav 
          button={"back"}
          page={"History"}
        />
        <div className={styles.container}>
            <div className={historyStyles.history} style={this.state.interfaces.length > 1? {height: 'auto'}: {height: '100%'}}>
              {this.showLoading()}
              <div className={historyStyles.interfaceContainer}>
                {interfaces.length > 1? interfaces: none}
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
      token: props.login.token
  }

}
export default connect(mapStateToProps)(History);
