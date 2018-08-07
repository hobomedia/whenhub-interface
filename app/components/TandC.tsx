import * as React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Checkbox from 'material-ui/Checkbox';

const styles = require('./Home.scss');
const tandcStyles = require('./TandC.scss');

export class TandC extends React.Component<any, {termsCheck: boolean}>{ 
  constructor(props:any){
    super(props)

    this.state = {
        termsCheck: false
    }
  }

  handleTermsChange() {
      if (this.state.termsCheck == false) {
          this.setState({termsCheck: true})
      }else {
          this.setState({termsCheck: false})
      }
  }

    render() {
        return (
        <div className={styles.container} style={{height: "600px"}}>
            <div id={tandcStyles.background}>
                <div style={{color: "white",textAlign: "center", fontSize: "15px", marginBottom: "10px"}}>
                    Interface Terms and Conditions
                </div>

                <table style={{margin: "auto"}}>
                    <tbody>
                        <tr>
                            <td>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td id={tandcStyles.amount}>Maximum Amount: </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div style={{color: "white",textAlign: "center", fontWeight: 100, fontSize: "11px", marginTop: "10px", paddingLeft: "10px", paddingRight: "10px"}}>
                    * Final amount charged may be less based on the duration of the call. The first minute of all calls is free. The minimum call duration is 15 minutes.
                </div>

                <div className={tandcStyles.paymentHeader}>
                    Call and Payment Terms
                </div>
                <div>
                    <div className={tandcStyles.term}>
                        <div className={tandcStyles.termHeader}>No Refund: </div><div className={tandcStyles.termbody}>Payments are automated and no refund is possible regardless of your satisfaction level with the call.</div>
                    </div>

                    <div className={tandcStyles.term}>
                        <div className={tandcStyles.termHeader}>No Verification: </div><div className={tandcStyles.termbody}>None of the claims made by the person you are contacting have been verified by anybody.</div>
                    </div>

                    <div className={tandcStyles.term}>
                        <div className={tandcStyles.termHeader}>No Guarantee: </div><div className={tandcStyles.termbody}>There is no guarantee that you will be satisfied with the outcome of the call.</div>
                    </div>


                </div>

                <div className={tandcStyles.termsLink}>
                    <Link to=""><span><i className="fa fa-external-link"></i> Review Terms and Conditions</span></Link>
                </div>

                <Checkbox
                    color="default"
                    checked={this.state.termsCheck}
                    onChange={() => this.handleTermsChange()}
                />


                <div className={tandcStyles.consentText}>
                    I understand the risk, agree with the terms, and wish to proceed with the call.
                </div>

                <div className={tandcStyles.option}>
                    Choose a payment option: 
                </div>

                <button style={{ backgroundColor: "#FFF", color: "black", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" className="btn">
                    When Pay
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
export default connect(mapStateToProps)(TandC);
