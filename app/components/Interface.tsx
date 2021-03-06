import * as React from 'react';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { endInterface } from '../actions/interface';
import { checkInterface } from '../actions/interface';
import IceLinkApp from './IceLinkApp';
import ScreenPicker from './ScreenPicker';

const {desktopCapturer} = require('electron')

let interfaceStyles = require('./Interface.scss');

export class Interface extends React.Component<any, { screens: any, showScreensClick: boolean, screenShare: boolean, interval: any, min: any, localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any}>{
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
            screenShare: false,
            showScreensClick: false,
            screens: [],
        }
        console.log(this.props)
    }

    componentDidMount() {
        let handleStream = this.handleStream.bind(this);
        let getUserMediaError = this.getUserMediaError;


        desktopCapturer.getSources({types: ['screen']}, function(error, sources) {
            if (error) throw error;
            for (var i = 0; i < sources.length; ++i) {
                if (sources[i].name == "Screen 1") {
                        (navigator as any).webkitGetUserMedia({
                        audio: false,
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: sources[i].id,
                                minWidth: 1280,
                                maxWidth: 1280,
                                minHeight: 720,
                                maxHeight: 720
                            }
                        }
                    }, handleStream, getUserMediaError);
                    return;
                }
            }
        });






        // console.log(this.props.interface, this.state.screenShare)
        // this.app.sessionId = `${this.props.interface.connectionId}`;
        // this.app.name = 'Interface';

        // this.app.startLocalMedia(this.refs.container as HTMLElement, this.state.screenShare).then((localMedia: fm.icelink.LocalMedia) => {
        //     // Update the UI context.
        //     // Join the session.
        //     return this.app.joinAsync();
        // }, (ex: any) => {
        //     console.error('Could not start local media.', ex);
        //     alert('Could not start local media.\n' + ex.message);
        //     stop();
        // }).then((o: any) => {
        //     // Enable the leave button.
        //     console.log('I joined');
        // }, (ex: any) => {
        //     console.error('Could not join session.', ex);
        // });


    }

    handleStream (stream: MediaStream) {
        // (document.querySelector('video') as HTMLVideoElement).src = URL.createObjectURL(stream);

        console.log(this.props.interface)
        this.app.sessionId = `${this.props.interface.connectionId}`;
        this.app.name = 'Interface';

        this.app.startLocalMedia(this.refs.container as HTMLElement, stream).then((localMedia: fm.icelink.LocalMedia) => {
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

    handleScreen( stream: any){
        console.log(stream)
        let newScreens = this.state.screens.concat(stream)
        console.log(newScreens)
        this.setState({screens: newScreens, showScreensClick: true})
    }

    getUserMediaError(error: any){
        console.log(error)
    }

    goToInterface(){
        this.setState({showScreensClick: false})
    }

    getScreenFromPicker(screen: MediaStream){
        console.log(screen)
        this.handleStream(screen)
    }



    onScreenShare(){
        // this.app.toggleVideoMute();
        this.app.changeVideoSource();
        // this.showSources()
        // let handleScreen = this.handleScreen.bind(this);
        // let getUserMediaError= this.getUserMediaError;
        // desktopCapturer.getSources({types: ['screen']}, function(error, sources) {
        //     if (error) throw error;
        //     for (let source of sources) {
        //         console.log(source.name)
        //         if (source.name.includes('Screen')) {
        //             (navigator as any).webkitGetUserMedia({
        //                 audio: false,
        //                 video: {
        //                     mandatory: {
        //                         chromeMediaSource: 'desktop',
        //                         chromeMediaSourceId: source.id,
        //                         minWidth: 1280,
        //                         maxWidth: 1280,
        //                         minHeight: 720,
        //                         maxHeight: 720
        //                     }
        //                 }
        //             }, handleScreen, getUserMediaError)
        //             return
        //         }
        //     }
        // });

        // let handleStream = this.handleStream;
        // let getUserMediaError = this.getUserMediaError;

        // this.app.stopLocalMedia().then((o: any) => {
        //     console.log("media capture stopped")
        //     // this.showSources();
        //     desktopCapturer.getSources({types: ['screen']}, function(error, sources) {
        //         if (error) throw error;
        //         for (var i = 0; i < sources.length; ++i) {
        //             if (sources[i].name == "Screen 1") {
        //                     (navigator as any).webkitGetUserMedia({
        //                     audio: false,
        //                     video: {
        //                         mandatory: {
        //                             chromeMediaSource: 'desktop',
        //                             chromeMediaSourceId: sources[i].id,
        //                             minWidth: 1280,
        //                             maxWidth: 1280,
        //                             minHeight: 720,
        //                             maxHeight: 720
        //                         }
        //                     }
        //                 }, handleStream, getUserMediaError);
        //                 return;
        //             }
        //         }
        //     });
        // }).fail((ex: any) => {
        //     console.log("failed to stop local media")
        // })


    }
    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    onStopSubmit() {
        const ref = this;
        const args = {
            bearer: this.props.bearer,
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
                ref.check()        
            })
        }).fail((ex: any) => {
            console.log("failed to stop local media")
        })
    }

    check() {
        let data = {
            bearer: this.props.bearer,
            connectionId: this.props.interface.connectionId
        }
        let that = this;
        this.props.dispatch(checkInterface(data)).then(function (response: any) {
            console.log(response.data.interface)
            if (response.data.interface.active == false) {
                console.log("inactive", response.data.interface.active)
                that.props.history.push({
                    pathname: '/RateCall',
                    state: { interface: response.data }
                });
            } else {
                that.check()
            }
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
        if(this.props.interface.contractMaxInUSD > 0){
            return <div style={{height: "48px", width: "100%"}}>
                <div className={this.props.interface.estimatedInitialMaxDuration != 15? interfaceStyles.progressSection: interfaceStyles.progressSection15} style={{backgroundColor: this.state.min < 1? "green": "red"}}>
                   <div>Free</div>
                   <div>(1 min)</div>
                </div>

                <div className={this.props.interface.estimatedInitialMaxDuration != 15? interfaceStyles.progressSection: interfaceStyles.progressSection15} style={{backgroundColor: (this.state.min >= 1) && (this.state.min <= 15)? "green": "red"}}>
                    <div>${(this.props.interface.expertise.hourlyRateUSD/4).toFixed(2)}</div> 
                    <div>15 mins</div>
                </div>

                <div className={interfaceStyles.progressSection} style ={{
                        backgroundColor: (this.state.min >= this.props.interface.expertise.minimumDuration) && (this.state.min <= this.props.interface.estimatedInitialMaxDuration)? "green": "red",
                        display: this.props.interface.estimatedInitialMaxDuration == 15? "none": "inline-block"
                    }}>
                    <div>${(this.props.interface.expertise.hourlyRateUSD/60).toFixed(2)}</div>
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
        if(this.state.showScreensClick == false){
            return (
                <div className={interfaceStyles.container}>
                    <div className={interfaceStyles.video} id="container" ref="container">
                    <div style={{ position: "absolute", zIndex: 1000, width: "337px", bottom: "0px", color: "white" }}>
                        <video style={{width: "190px", height: "auto"}}>
                        </video>
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
        }else {
            return (
                <ScreenPicker
                    handler={this.goToInterface.bind(this)}
                    getScreen={this.getScreenFromPicker.bind(this)}
                    screens={this.state.screens}
                />
            )
        }
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
