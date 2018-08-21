import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { goOnline } from '../actions/experts';
import { Accept } from './Accept';

const styles = require('./Home.scss');
const goOnlineStyles = require('./GoOnline.scss');

export class GoOnline extends React.Component<any>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
      console.log("go online click")
    // let that = this;
    let args = {
        data: {
          'expertise': this.props.location.state.topicValue,
          'selfRating': this.props.location.state.rating,
          'hourlyRate': this.props.location.state.rateValue,
          'minimumDuration': 15
        },
        bearer: this.props.bearer,
        profile: this.props.profile
      }
        this.props.dispatch(goOnline(args)).then(function(response: any){
            console.log("expert is online")
        // that.props.history.push({
        //   pathname: 'GoOnline',
        //   state: {
        //     acceptedCurrencies: {
        //       token: that.state.tokenCheck,
        //       dollar: that.state.dollarCheck
        //     }, 
        //     topics: that.state.topicValue
        //   }
        // })
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

                <div className={goOnlineStyles.tableRow} style={{borderBottom: "solid 1px black"}}>
                    Topics: {this.props.location.state.topics}
                </div>

                <div className={goOnlineStyles.tableRow} style={{borderBottom: "solid 1px black"}}>
                    <div className={goOnlineStyles.tableHeaders} style={{width: "50%", borderRight: "solid 1px black"}}>Currency</div>
                    <div className={goOnlineStyles.tableHeaders} style={{width: "30%", borderRight: "solid 1px black", paddingLeft: "8px"}}>Rate/Hour</div>
                    <div className={goOnlineStyles.tableHeaders} style={{width: "20%", paddingLeft: "10px"}}>Fee</div>
                </div>

                <div className={goOnlineStyles.tableRow}>
                    <div className={goOnlineStyles.tableResults} style={{width: "50%", borderRight: "solid 1px black"}}>WHEN tokens (&#65510;)</div>
                    <div className={goOnlineStyles.tableResults} style={{width: "30%", borderRight: "solid 1px black", paddingLeft: "8px"}}>0.00</div>
                    <div className={goOnlineStyles.tableResults} style={{width: "20%", paddingLeft: "10px"}}>0%</div>
                </div>

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

                <div className={goOnlineStyles.buttonBackground}>
                    <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginBottom: "20px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                        Go Online
                    </button>

                    <Link style={{color: "white"}} to="/BeExpert">Cancel</Link>
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
        bearer: props.login.bearer
    }

}
export default connect(mapStateToProps)(GoOnline);
