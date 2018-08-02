import * as React from 'react';
import { connect } from 'react-redux';
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
        this.props.history.push({
            pathname: '/Interface'
        })
    }

    onDecline() {
        console.log("decline")
    }

    render() {
        return (
            <div className={styles.container} style={{ height: "600px" }}>
                <div id={incomingCallStyles.background}>
                    <div>
                        Incoming Call ...
                    </div>
                    <div className={incomingCallStyles.buttonWell}>
                        <button id={incomingCallStyles.accept} type="button" onClick={this.onAccept.bind(this)} className="btn">
                            Y
                        </button>
                        <button id={incomingCallStyles.decline} type="button" onClick={this.onDecline.bind(this)} className="btn">
                            X
                        </button>

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
