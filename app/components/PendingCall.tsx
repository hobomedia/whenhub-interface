import * as React from 'react';
import { connect } from 'react-redux';
import { rejectInterface } from '../actions/interface';

const pendingCallStyles = require('./PendingCall.scss');

export class PendingCall extends React.Component<any, {}>{
    constructor(props: any) {
        super(props)

    }


    onCancel() {
        console.log("cancel call")
        let args = {
            bearer: this.props.bearer,
            // connectionId:
            
        }
        this.props.dispatch(rejectInterface(args))
    }


    render() {
        return (
            <div className={pendingCallStyles.pendingContainer}>
                <div className={pendingCallStyles.upper}>
                    <div>
                        Waiting for _______ to accept the invitation
                    </div>

                    <div className={pendingCallStyles.cancelWell}>
                        <button className={pendingCallStyles.cancel + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onCancel.bind(this)}>
                            Cancel
                        </button>
                    </div>

                </div>
                <div className={pendingCallStyles.lower}>
                    <div className={pendingCallStyles.picContainer}>
                        <img className={pendingCallStyles.picture} src={"../resources/expert_2.jpg"} alt="Avatar" />
                        <img className={pendingCallStyles.picture} src={"../resources/expert.jpg"} alt="Avatar" style={{ float: "right" }} />
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
        wallet: props.getWalletAmount.walletAmount,
        interface: props.startInterface.start
    }

}


export default connect(mapStateToProps)(PendingCall);
