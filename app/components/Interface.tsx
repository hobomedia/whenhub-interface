import * as React from 'react';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { endInterface } from '../actions/interface';
import IceLinkApp from './IceLinkApp';

// const Axios = require('axios');
let interfaceStyles = require('./Interface.scss');

export class Interface extends React.Component<any, { interval: any, min: any, localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any}>{
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
            interval: setInterval(() => this.setState({min: this.state.min + 1}), 60000)
        }
        console.log(this.props)
    }

    componentDidMount() {
        console.log(this.props.interface)
        this.app.sessionId = `${this.props.interface.connectionId}`;
        this.app.name = 'Jonathan';

        this.app.startLocalMedia(this.refs.container as HTMLElement, false).then((localMedia: fm.icelink.LocalMedia) => {
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

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    onStopSubmit() {
        const ref = this;
        const args = {
            connectionId: this.props.interface.connectionId
        }
        this.app.leaveAsync().fail((ex) => {
            console.log("couldn't leave the call")
        });

        this.app.stopLocalMedia().then((o) => {
            console.log("media capture stopped")
            this.props.dispatch(endInterface(args)).then(function(response: any){
                ref.props.history.push('/RateCall')
            })
        }).fail((ex) => {
            console.log("couldn't stop local media")
        })
    }


    onMute() {
        console.log("tried to mute")
        console.log(this.app.toggleAudioMute());
        // let Audio = this.state.localMedia.getAudioTrack();
        // Audio.setMuted(!Audio.getMuted());

        if(this.state.muteButtonClick == true){
        this.setState({ muteButtonClick: false })

        }else {
            this.setState({ muteButtonClick: true })
        }
    }

    // onUnMute() {
    //     let Audio = this.state.localMedia.getAudioTrack();
    //     Audio.setMuted(!Audio.getMuted());
    //     this.setState({ muteButtonClick: false })

    // }

    muteButton() {
        if (this.state.muteButtonClick == false) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone-slash"></i>
            </button>
        } else if (this.state.muteButtonClick == true) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone"></i>
            </button>
        }
        return
    }


    render() {
            return (
                <div className={interfaceStyles.container}>
                    <div style={{ position: "absolute", zIndex: 1000, width: "337px", paddingTop: "8px" }}>
                        {this.muteButton()}
                        <button className={interfaceStyles.end + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onStopSubmit.bind(this)}>
                            <i className="fa fa-phone"></i>
                        </button>
                    </div>
                    <div className={interfaceStyles.video} id="container" ref="container">
                    </div>
                    <div style={{ position: "absolute", zIndex: 1000, padding: "6px", width: "337px", bottom: "5px", color: "white" }}>
                        <div style={{display: "inline-block"}}>
                            <div>
                                {this.props.location.state.expertInfo.name}
                            </div>
                            <div>
                                Rate: (&#65510;){this.props.location.state.expertInfo.expertise.hourlyRate}/hour
                            </div>
                        </div>

                        <div style={{display: "inline-block", float: "right"}}>
                            <div>
                                Elapsed Time: {this.state.min} min.
                            </div>
                            <div style={{fontWeight: 100, fontSize: "10pt"}}>
                                <div style={{display: "inline-block"}}>
                                    Min: {this.props.interface.expertise.minimumDuration}mins.
                                </div>
                                <div style={{display: "inline-block", marginLeft: "10px"}}>
                                    Max: 0 mins.
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
