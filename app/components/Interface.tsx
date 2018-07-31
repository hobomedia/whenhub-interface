import * as React from 'react';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
// import { startInterface } from '../actions/interface';

// const Axios = require('axios');
let interfaceStyles = require('./Interface.scss');

export class Interface extends React.Component<any, { interval: any, min: any, localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any}>{
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
        const connectionId = parseInt(this.props.interface.connectionId)
        // console.log(connectionId)

        const audio = true;
        // var video = true? new fm.icelink.VideoConfig(window.screen.width, window.screen.height, 3) : new fm.icelink.VideoConfig(640, 480, 30);
        var video = true;
        const that = this;

        // start local media
        // const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video, true);
        const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);


        localMedia.start().then(function (lm: any) {
            console.log("media capture started");
            const container: HTMLElement = document.getElementById("container")!;
            const layoutManager = new fm.icelink.DomLayoutManager(container);
            layoutManager.applyPreset(fm.icelink.LayoutPreset.getFacetime())

            //set local media to layout manager
            layoutManager.setLocalView(localMedia.getView());
            that.setState({ localMedia: localMedia, layoutManager: layoutManager })
        })
        .then(function () {
            //connect to websync
            const client = new (window as any).fm.websync.client("https://v4.websync.fm/websync.ashx");
            client.setDomainKey(new fm.icelink.Guid('b0e15424-ba55-489d-b62a-1d6e1aa5927d'));
            client.connect({
                onSuccess: function (e: any) {
                    console.log("connected to websync");
                },
                onFailure: function (e: any) {
                    console.log("failed to connect to websync");
                }
            });

            //Join conference
            let promise = new fm.icelink.Promise();
            try {
                let joinArgs = new fm.icelink.websync4.JoinConferenceArgs("/auto-signalling/" + `${connectionId}`);
                joinArgs.setOnSuccess((args) => {
                    console.log("success")
                    promise.resolve({});
                })
                joinArgs.setOnFailure((args) => {
                    console.log("fail")

                    console.log(args.getException())
                    promise.reject(args.getException());
                })
                joinArgs.setOnRemoteClient((remoteClient) => {

                    //add remote media to layout manager
                    let remoteMedia = new fm.icelink.RemoteMedia();
                    let remoteView = remoteMedia.getView();
                    if (remoteView != null) {
                        remoteMedia.getViewSink().setViewScale(fm.icelink.LayoutScale.Contain);
                        that.state.layoutManager.addRemoteView(remoteMedia.getId(), remoteView);
                    }
                    //create connection to remote client
                    const audioStream = new fm.icelink.AudioStream(that.state.localMedia, remoteMedia);
                    const videoStream = new fm.icelink.VideoStream(that.state.localMedia, remoteMedia);
                    const connection = new fm.icelink.Connection([audioStream, videoStream]);

                    connection.setIceServers([
                        new fm.icelink.IceServer("stun:turn.icelink.fm:3478"),
                        new fm.icelink.IceServer("turn:turn.icelink.fm:443", "test", "pa55w0rd!")
                    ]);

                    fm.icelink.Log.setLogLevel(fm.icelink.LogLevel.Debug);
                    fm.icelink.Log.registerProvider(new fm.icelink.ConsoleLogProvider(fm.icelink.LogLevel.Debug));

                    connection.addOnStateChange(function (c: fm.icelink.Connection) {
                        var error = connection.getError();
                        console.log(c.getState())
                        if (c.getState() == fm.icelink.ConnectionState.Connected) {
                            that.state.layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());
                            console.log("connected")
                            that.setState({ remoteMedia: remoteMedia.getId() })
                        } else if (c.getState() == fm.icelink.ConnectionState.Failing || c.getState() == fm.icelink.ConnectionState.Closing) {
                            that.state.layoutManager.removeRemoteView(remoteMedia.getId());
                            remoteMedia.destroy();
                            console.log(error)
                        }
                    });
                    return connection
                })
                fm.icelink.websync4.ClientExtensions.joinConference(client, joinArgs);
            }
            catch (error) {
                console.log("new error", error)
                promise.reject(error);
            }
            that.setState({ client: client })
            // return promise;
        }).fail(function (error: any) {
            console.log(error.message)
        })
    }

    componentWillUnmount(){
        clearInterval(this.state.interval)
    }

    onStopSubmit() {
        this.state.localMedia.stop().then(function (lm: any) {
            console.log("media capture stopped");
        })

        this.state.client.disconnect({
            onComplete: function (e: any) {
                console.log("disconnected");
            }
        });

        this.props.history.push('/RateCall')

        this.state.layoutManager.removeRemoteView(this.state.remoteMedia)
    }


    onMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
        this.setState({ muteButtonClick: true })
    }

    onUnMute() {
        let Audio = this.state.localMedia.getAudioTrack();
        Audio.setMuted(!Audio.getMuted());
        this.setState({ muteButtonClick: false })

    }

    muteButton() {
        if (this.state.muteButtonClick == false) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone-slash"></i>
            </button>
        } else if (this.state.muteButtonClick == true) {
            return <button className={interfaceStyles.Button + ` btn`} style={{borderRadius: "20px"}} type="button" onClick={this.onUnMute.bind(this)}>
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
                    <div className={interfaceStyles.video} id="container">
                    </div>
                    {/* <div style={{ position: "absolute", zIndex: 1000, padding: "6px", width: "337px", bottom: "5px", color: "white" }}>
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
                    </div> */}
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
