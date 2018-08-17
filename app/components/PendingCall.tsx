import * as React from 'react';
import { connect } from 'react-redux';
import { rejectInterface } from '../actions/interface';
import { startInterface } from '../actions/interface';
import { checkInterface } from '../actions/interface';

const pendingCallStyles = require('./PendingCall.scss');

export class PendingCall extends React.Component<any, {}>{
    constructor(props: any) {
        super(props)
        console.log(this.props.location.state)
    }


    onCancel() {
        console.log("cancel call")
        let args = {
            bearer: this.props.bearer,
            // connectionId:
            
        }
        this.props.dispatch(rejectInterface(args))
    }
    check(data: any) {
        let that = this;
        this.props.dispatch(checkInterface(data)).then(function (response: any) {
            console.log(response.data.interface)
            if (response.data.interface.active == true) {
                console.log("active", response.data.interface.active)
                that.props.history.push({
                    pathname: '/Interface',
                    state: { expertInfo: that.props.location.state.expertInfo }
                });
            } else {
                that.check(data)
            }
        })
    }


    componentDidMount() {
        let args = {
            bearer: this.props.bearer,
            data: {
                expertId: `${this.props.location.state.expertInfo.id}`,
                callerId: '5acbba9ca6a3c60600000001',
                estimatedInitialMaxDuration: this.props.location.state.estimatedDuration,
                purposeOfInterface: this.props.location.state.purposeOfInterface,
                version: 14
            }
        }

        let that = this;
        this.props.dispatch(startInterface(args)).then(function (response: any) {
            console.log(response)
            that.check(response)
        })

    }


    render() {
        return (
            <div className={pendingCallStyles.pendingContainer}>
                <div className={pendingCallStyles.upper}>
                    <div>
                        Waiting for {this.props.location.state.expertInfo.name} to accept the invitation
                    </div>

                    <div className={pendingCallStyles.cancelWell}>
                        <button className={pendingCallStyles.cancel + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onCancel.bind(this)}>
                            Cancel
                        </button>
                    </div>

                </div>
                <div className={pendingCallStyles.lower}>
                    <div className={pendingCallStyles.picContainer}>
                        <img className={pendingCallStyles.picture} src={this.props.location.state.expertInfo.picture} alt="Avatar" />
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
