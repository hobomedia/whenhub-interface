import * as React from 'react';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { endInterface } from '../actions/interface';
import IceLinkApp from './IceLinkApp';

let interfaceStyles = require('./Interface.scss');

export class Interface extends React.Component<any, { screenShare: boolean, interval: any, min: any, localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any}>{
    app = new IceLinkApp();

    constructor(props: any) {
        super(props)
        this.state = {
            localMedia: null,
            layoutManager: null,
            remoteMedia: null,
            client: null,
            muteButtonClick: false,
            min: 0, 
            interval: setInterval(() => this.setState({min: this.state.min + 1}), 60000),
            screenShare: false
        }
        console.log(this.props)
    }

    componentDidMount() {
        console.log(this.props.interface, this.state.screenShare)
        this.app.sessionId = `${this.props.interface.connectionId}`;
        this.app.name = 'Interface';

        this.app.startLocalMedia(this.refs.container as HTMLElement, this.state.screenShare).then((localMedia: fm.icelink.LocalMedia) => {
            // Update the UI context.
            // Join the session.
            return this.app.joinAsync();
        }, (ex: any) => {
            console.error('Could not start local media.', ex);
            alert('Could not start local media.\n' + ex.message);
            stop();
        }).then((o: any) => {
            // Enable the leave button.
            console.log('I joined');
        }, (ex: any) => {
            console.error('Could not join session.', ex);
        });


    }

    onScreenShare(){
        console.log(this.state.screenShare)
        this.app.sessionId = `${this.props.interface.connectionId}`;
        this.app.name = 'Interface';

        this.app.startLocalMedia(this.refs.container as HTMLElement, this.state.screenShare).then((localMedia: fm.icelink.LocalMedia) => {
            // Update the UI context.
            // Join the session.
            // return this.app.joinAsync();
        }, (ex: any) => {
            console.error('Could not start local media.', ex);
            alert('Could not start local media.\n' + ex.message);
            stop();
        }).then((o: any) => {
            // Enable the leave button.
            console.log('I joined');
        }, (ex: any) => {
            console.error('Could not join session.', ex);
        });


    }
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    onStopSubmit() {
        const ref = this;
        const args = {
            connectionId: this.props.interface.connectionId
        }
        this.app.leaveAsync().then((o: any) => {
            console.log("left call")
        }).fail((ex: any) => {
            console.log("failed to leave the call")
        });

        this.app.stopLocalMedia().then((o: any) => {
            console.log("media capture stopped")
            this.props.dispatch(endInterface(args)).then(function(response: any){
                ref.props.history.push('/RateCall')
            })
        }).fail((ex: any) => {
            console.log("failed to stop local media")
        })
    }

    onMute() {
        this.app.toggleAudioMute();

        if(this.state.muteButtonClick == true){
        this.setState({ muteButtonClick: false })

        }else {
            this.setState({ muteButtonClick: true })
        }
    }

    muteButton() {
        if (this.state.muteButtonClick == false) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone"></i>
            </button>
        } else if (this.state.muteButtonClick == true) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone-slash"></i>
            </button>
        }
        return
    }

    progressBar() {
        if(this.props.interface.estimatedInitialMaxDuration > 15){
            return <div style={{height: "48px", width: "100%"}}>
                <div className={this.props.interface.estimatedInitialMaxDuration != 15? interfaceStyles.progressSection: interfaceStyles.progressSection15} style={{backgroundColor: this.state.min < 1? "green": "red"}}>
                   <div>Free</div>
                   <div>(1 min)</div>
                </div>

                <div className={this.props.interface.estimatedInitialMaxDuration != 15? interfaceStyles.progressSection: interfaceStyles.progressSection15} style={{backgroundColor: (this.state.min >= 1) && (this.state.min <= 15)? "green": "red"}}>
                    <div>${(this.props.interface.expertise.hourlyRate/4).toFixed(2)}</div> 
                    <div>15 mins</div>
                </div>

                <div className={interfaceStyles.progressSection} style ={{
                        backgroundColor: (this.state.min >= this.props.interface.expertise.minimumDuration) && (this.state.min <= this.props.interface.estimatedInitialMaxDuration)? "green": "red",
                        display: this.props.interface.estimatedInitialMaxDuration == 15? "none": "inline-block"
                    }}>
                    <div>${this.props.interface.expertise.hourlyRate/60}</div>
                    <div>Pay/Minute</div>
                    <div>(Up to {this.props.interface.estimatedInitialMaxDuration} min)</div>
                </div>

                <div className={this.props.interface.estimatedInitialMaxDuration != 15? interfaceStyles.progressSection: interfaceStyles.progressSection15} style={{backgroundColor: this.state.min > this.props.interface.estimatedInitialMaxDuration? "green": "red"}}>
                    <div>Free</div> 
                    <div>(unlimited)</div>
                </div>
            </div>

        }else {
            return <div style={{height: "45px", width: "100%"}}>
                <div className={interfaceStyles.progressSectionFree} style={{backgroundColor: "green"}}>
                    <div>Free</div> 
                    <div>(unlimited)</div>
                </div>

            </div>
        }
    }


    render() {
            return (
                <div className={interfaceStyles.container}>
                    <div className={interfaceStyles.video} id="container" ref="container">
                    <div style={{ position: "absolute", zIndex: 1000, width: "337px", bottom: "0px", color: "white" }}>
                        {this.progressBar()}
                        {/* <div style={{height: "45px", width: "100%"}}>
                            <div className={interfaceStyles.progressSection} style={{backgroundColor: this.state.min < 1? "green": "red"}}>
                                Free<div>(1 min)</div>
                            </div>

                            <div className={interfaceStyles.progressSection} style={{backgroundColor: (this.state.min >= 1) && (this.state.min <= 15)? "green": "red"}}>
                                ${(this.props.interface.expertise.hourlyRate/this.props.interface.expertise.minimumDuration).toFixed(2)} <div>15 mins</div>
                            </div>

                            <div className={interfaceStyles.progressSection} style ={{backgroundColor: (this.state.min >= this.props.interface.expertise.minimumDuration) && (this.state.min <= this.props.interface.estimatedInitialMaxDuration)? "green": "red"}}>
                                Pay/Minute <div>(Up to {this.props.interface.estimatedInitialMaxDuration} min)</div>
                            </div>

                            <div className={interfaceStyles.progressSection} style={{backgroundColor: this.state.min > this.props.interface.estimatedInitialMaxDuration? "green": "red"}}>
                                Free <div>(unlimited)</div>
                            </div>

                        </div> */}
                        
                        <div className={interfaceStyles.ButtonWell}>
                            <button className={interfaceStyles.share + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onScreenShare.bind(this)}>
                            <i className="fa fa-desktop"></i>
                            </button>

                            <button className={interfaceStyles.end + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onStopSubmit.bind(this)}>
                                <i className="fa fa-phone"></i>
                            </button>

                            {this.muteButton()}
                        </div>

                        <div className={interfaceStyles.infoWell}>
                            <div className={interfaceStyles.callerName}>
                                <div>
                                    {this.props.location.state.expertInfo.name}
                                </div>
                            </div>

                            <div style={{display: "inline-block", float: "right", marginRight: "6px"}}>
                                <div>
                                    Elapsed Time: {this.state.min} min.
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            )
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
export default connect(mapStateToProps)(Interface);
