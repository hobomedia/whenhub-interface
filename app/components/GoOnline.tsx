import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
const Axios = require('axios');
const styles = require('./Home.scss');
const goOnlineStyles = require('./GoOnline.scss');

export class GoOnline extends React.Component<any>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
    Axios({
        method: 'PUT',
        url: `https://interface-api.whenhub.com/api/Experts/`+ `${this.props.profile['https://interface.whenhub.com/winid']}` + `/offline`,
        headers: {
          'Authorization': 'Bearer ' + `${this.props.bearer}`
        }
      }).then(function (response: any) {
        console.log(response.data)
        history.back();
      }).catch(function (error: any) {
        console.log(error)
      })
  
  }

    render() {
        console.log(this.props.location.state)
        return (
        <div className={styles.container} style={{height: "600px"}}>
            <div id={goOnlineStyles.background}>
                <div style={{color: "white",textAlign: "center"}}>
                    Interface Terms and Conditions
                </div>

                <table style={{margin: "auto"}}>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Topics</td>
                                            <td>Blockchain, Aviation</td>
                                        </tr>
                                        <tr>
                                            <td>Currency</td>
                                            <td>Rate/Hour</td>
                                            <td>Fee</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>When Tokens</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p> US Dollars</p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={{color: "white",textAlign: "center"}}>
                    Call and Payout Terms
                </div>
                <div>
                    <div className={goOnlineStyles.term}>
                        <div className={goOnlineStyles.termHeader}>First Minute Free: </div><div className={goOnlineStyles.termbody}>The first minute of all calls is free. The minimum call duration is 15 minutes.</div>
                    </div>

                    <div className={goOnlineStyles.term}>
                        <div className={goOnlineStyles.termHeader}>Payouts in 72 hours: </div><div className={goOnlineStyles.termbody}>Payouts are processed automatically within 72 hours after call is completed.</div>
                    </div>

                    <div className={goOnlineStyles.term}>
                        <div className={goOnlineStyles.termHeader}>Poor Rating 90-day Hold: </div><div className={goOnlineStyles.termbody}>If a caller gives you a rating below 3 starts, a 90-day hold is placed on payouts.</div>
                    </div>


                </div>

                <div className={goOnlineStyles.termsLink}>
                    <Link to=""><span><i className="fa fa-external-link"></i> Review Terms and Conditions</span></Link>
                </div>

                <div className={goOnlineStyles.consentText}>
                    By going Online, you agree to the terms and conset to your profile appearing in searches on the WhenHub Interface network
                </div>

                <button style={{ backgroundColor: "#e64b4b", color: "white", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                    Go Offline
                </button>


            </div>
        </div>       
        );
    }
}

const mapStateToProps = function (props: any, state: any) {
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer
    }

}
export default connect(mapStateToProps)(GoOnline);
