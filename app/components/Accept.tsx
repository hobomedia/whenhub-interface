import * as React from 'react';
import { connect } from 'react-redux';

const acceptStyles = require('./Accept.scss');

export class Accept extends React.Component<any, {}>{
    constructor(props: any) {
        super(props)

    }

    onDecline() {

    }

    onAccept(){

    }


    render() {
        return (
            this.props.incomingInterface!=null ? <div className={acceptStyles.lower}>
                <div>
                    <img className={acceptStyles.picture} src={"../resources/expert_2.jpg"} alt="Avatar" />
                    <div style={{display: "inline-block", verticalAlign: "top", width: "212px", height: "126px", paddingTop: "16px"}}>
                        <div>
                            Caller Name
                        </div>
                        <div>
                            Is inviting you to Interface for ___ mins. (&#65510;) 0.00
                        </div>
                    </div>

                </div>
                <div className={acceptStyles.reason}>
                    Reason for call
                </div>
                <div className={acceptStyles.cancelWell}>
                    <div style={{display: "inline-block", paddingLeft: "10px"}}>
                        <div>
                            Fees
                        </div>
                        <div>
                            Network: 0.00%
                        </div>
                    </div>
                    <div style={{display: "inline-block", paddingLeft: "48px"}}>
                        <button className={acceptStyles.accept + ` btn`} style={{borderRadius: "20px", display: "inline-block"}} type="button" onClick={this.onAccept.bind(this)}>
                            Accept
                        </button>

                        <button className={acceptStyles.cancel + ` btn`} style={{borderRadius: "20px", display: "inline-block"}} type="button" onClick={this.onDecline.bind(this)}>
                            Decline
                        </button>
                    </div>


                </div>

            </div> : null
        );
    }
}

const mapStateToProps = function (props: any, state: any) {
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        wallet: props.getWalletAmount.walletAmount,
        incomingInterface: props.startInterface.interface
    }

}


export default connect(mapStateToProps)(Accept);
