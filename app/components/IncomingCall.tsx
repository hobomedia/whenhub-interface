import * as React from 'react';
import { connect } from 'react-redux';
import { rejectInterface } from '../actions/interface';
import { joinInterface } from '../actions/interface';

const styles = require('./Home.scss');
const incomingCallStyles = require('./IncomingCall.scss');

export class IncomingCall extends React.Component<any, {}>{
    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
    }

    onAccept() {
        console.log("accept")
        const ref = this;
        let args = {
            // connectionId:
            bearer: this.props.bearer,
        }
        this.props.dispatch(joinInterface(args)).then(function(response: any) {
            ref.props.history.push({
                pathname: '/Interface'
            })

        })
    }

    onDecline() {
        console.log("decline")
        let args = {
            // connectionId: 
            bearer: this.props.bearer
        }
        this.props.dispatch(rejectInterface(args)).then(function(response: any) {
            console.log(response)
        })
    }

    render() {
        return (
            <div className={styles.container} style={{ height: "600px" }}>
                <div id={incomingCallStyles.background}>
                    <div>
                        CALLER NAME
                    </div>
                    <div>
                        Incoming Call ...
                    </div>
                    <div className={incomingCallStyles.buttonWell}>
                        <button id={incomingCallStyles.decline} type="button" onClick={this.onDecline.bind(this)} className="btn">
                            <i className="fa fa-times"></i>
                        </button>
                        <button id={incomingCallStyles.accept} type="button" onClick={this.onAccept.bind(this)} className="btn">
                            <i className="fa fa-check"></i>
                        </button>
                        <div className={incomingCallStyles.answerButtons} id={incomingCallStyles.declineButton}>Decline</div>
                        <div className={incomingCallStyles.answerButtons}>Accept</div>
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
export default connect(mapStateToProps)(IncomingCall);
