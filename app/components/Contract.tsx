import * as React from 'react';
import Nav from './Nav';
import { connect } from 'react-redux';
import 'rc-slider/assets/index.css';
import { startInterface } from '../actions/interface';
import { checkInterface } from '../actions/interface';
// import { joinInterface } from '../actions/interface';

// const Axios = require('axios');
const Slider = require('rc-slider/lib/Slider');
let styles = require('./Home.scss');
let contractStyles = require('./Contract.scss');

export class Contract extends React.Component<any, { localMedia: any, layoutManager: any, remoteMedia: any, client: any, muteButtonClick: any, value: string, section: string, duration: number, contractAmount: number, connect: Boolean }>{
    constructor(props: any) {
        super(props)
        this.state = {
            section: "deposit",
            value: "",
            duration: 0,
            contractAmount: 0,
            connect: false,
            localMedia: null,
            layoutManager: null,
            remoteMedia: null,
            client: null,
            muteButtonClick: false
        }
        console.log(this.props.location.state)
    }

    componentWillMount() {
    }

    slider(value: any) {
        console.log(value)
        this.setState({ duration: value })
    }

    handleChange(event: any) {
        this.setState({ value: event.target.value })
    }

    contractAmount() {
        let fraction = this.state.duration / 60;
        return this.props.location.state.expertInfo.expertise.hourlyRate * fraction
    }


    check(data:any){
        let that = this;
        this.props.dispatch(checkInterface(data)).then(function(response:any){
            if(response.data.interface.active == true){
                // that.props.dispatch(joinInterface(response.data.interface)).then(function(){
                //     console.log("after join")
                //     that.props.history.push('/Interface')
                // })
                that.props.history.push('/Interface');
            }else {
                that.check(data)
            }
        })
    }

    onSubmit() {
        console.log(this.state)
        console.log(this.props)
        console.log(this.contractAmount())

        let args = {
            bearer: this.props.bearer,
            data: {
                expertId: '5a44083472d2a50700bcf791',
                callerId: '5acbba9ca6a3c60600000001',
                estimatedInitialMaxDuration: 0,
                purposeOfInterface: this.state.value
            }
        }


        let that = this;
        this.props.dispatch(startInterface(args)).then(function (response: any) {
            console.log(response)
            that.check(response)
        })


        // const audio = true;
        // const video = true;
        // const that = this;

        // // start local media
        // const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);

        // localMedia.start().then(function (lm: any) {
        //     console.log("media capture started");
        //     const container: HTMLElement = document.getElementById("container")!;
        //     const layoutManager = new fm.icelink.DomLayoutManager(container);
        //     layoutManager.applyPreset(fm.icelink.LayoutPreset.getFacetime())

        //     //set local media to layout manager
        //     layoutManager.setLocalView(localMedia.getView());

        //     that.setState({ localMedia: localMedia, layoutManager: layoutManager })
        // })
        //     .then(function () {
        //         //connect to websync
        //         const client = new (window as any).fm.websync.client("https://v4.websync.fm/websync.ashx");
        //         client.setDomainKey(new fm.icelink.Guid('b0e15424-ba55-489d-b62a-1d6e1aa5927d'));
        //         client.connect({
        //             onSuccess: function (e: any) {
        //                 console.log("connected to websync");
        //             },
        //             onFailure: function (e: any) {
        //                 console.log("failed to connect to websync");
        //             }
        //         });


        //         //Join conference
        //         let promise = new fm.icelink.Promise();
        //         try {
        //             let joinArgs = new fm.icelink.websync4.JoinConferenceArgs("/auto-signalling/" + '444555');
        //             joinArgs.setOnSuccess((args) => {
        //                 console.log("success")
        //                 promise.resolve({});
        //             })
        //             joinArgs.setOnFailure((args) => {
        //                 console.log("fail")

        //                 console.log(args.getException())
        //                 promise.reject(args.getException());
        //             })
        //             joinArgs.setOnRemoteClient((remoteClient) => {

        //                 //add remote media to layout manager
        //                 let remoteMedia = new fm.icelink.RemoteMedia();
        //                 let remoteView = remoteMedia.getView();
        //                 if (remoteView != null) {
        //                     remoteMedia.getViewSink().setViewScale(fm.icelink.LayoutScale.Contain);
        //                     that.state.layoutManager.addRemoteView(remoteMedia.getId(), remoteView);
        //                 }
        //                 //create connection to remote client
        //                 const audioStream = new fm.icelink.AudioStream(that.state.localMedia, remoteMedia);
        //                 const videoStream = new fm.icelink.VideoStream(that.state.localMedia, remoteMedia);
        //                 const connection = new fm.icelink.Connection([audioStream, videoStream]);

        //                 connection.setIceServers([
        //                     new fm.icelink.IceServer("stun:turn.icelink.fm:3478"),
        //                     new fm.icelink.IceServer("turn:turn.icelink.fm:443", "test", "pa55w0rd!")
        //                 ]);

        //                 connection.addOnStateChange(function (c: fm.icelink.Connection) {
        //                     var error = connection.getError();

        //                     if (c.getState() == fm.icelink.ConnectionState.Connected) {
        //                         that.state.layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());

        //                         that.setState({ remoteMedia: remoteMedia.getId() })
        //                     } else if (c.getState() == fm.icelink.ConnectionState.Failing || c.getState() == fm.icelink.ConnectionState.Closing) {
        //                         that.state.layoutManager.removeRemoteView(remoteMedia.getId());
        //                         remoteMedia.destroy();
        //                         console.log(error)
        //                     }
        //                 });
        //                 return connection
        //             })
        //             fm.icelink.websync4.ClientExtensions.joinConference(client, joinArgs);
        //         }
        //         catch (error) {
        //             console.log("new error", error)
        //             promise.reject(error);
        //         }
        //         that.setState({ client: client })
        //         // return promise;
        //     }).fail(function (error: any) {
        //         console.log(error.message)
        //     })



    }

    onStopSubmit() {
        const that = this;
        this.state.localMedia.stop().then(function (lm: any) {
            console.log("media capture stopped");
        })

        this.state.client.disconnect({
            onComplete: function (e: any) {
                console.log("disconnected");
                that.setState({ connect: false })
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
            return <button className={contractStyles.Button + ` btn`} type="button" onClick={this.onMute.bind(this)}>
                <i className="fa fa-microphone-slash"></i>
            </button>
        } else if (this.state.muteButtonClick == true) {
            return <button className={contractStyles.Button + ` btn`} type="button" onClick={this.onUnMute.bind(this)}>
                <i className="fa fa-microphone"></i>
            </button>
        }
        return
    }


    render() {
        let expert = this.props.location.state.expertInfo;
        console.log(this.props)
        // if (this.state.connect == false) {
            return (
                <div>
                    <Nav
                        button={"back"}
                        page={"Interface Contract"}
                    />
                    <div className={styles.container}>
                        <div id={contractStyles.header}>
                            <img className={contractStyles.picture} src={expert.picture} alt="Avatar" />
                            <div>
                                {expert.name}
                            </div>

                            <div>
                                Contract for (&#65510;){this.contractAmount()}
                            </div>
                        </div>
                        <div className={contractStyles.body}>
                            <div>
                                Estimated Interface Duration
                        </div>
                            <div className={contractStyles.slider}>
                                <Slider
                                    dots step={15}
                                    min={15}
                                    max={75}
                                    marks={
                                        {
                                            15: "15",
                                            30: "30",
                                            45: "45",
                                            60: "60",
                                            75: "75"
                                        }
                                    }
                                    defaultValue={0}
                                    onChange={this.slider.bind(this)}
                                    TrackStyle={{ backgroundColor: '#37d3b4' }}
                                    dotStyle={{
                                        borderColor: '#37d3b4',
                                        backgroundColor: '#37d3b4'
                                    }}
                                    handleStyle={{
                                        borderColor: '#37d3b4',
                                        backgroundColor: '#37d3b4'
                                    }}
                                />
                            </div>

                            <div style={{ textAlign: "center", fontSize: "8pt", marginBottom: "10pt" }}>
                                This is the maximum billable duration of the call
                        </div>

                            <div style={{ display: "inline" }}>
                                Purpose of Interface
                        </div>
                            <div style={{ display: "inline", fontSize: "8pt" }}>
                                {" "}(minimum three words, 25 characters)
                        </div>

                            <form className="form-horizontal">
                                <textarea value={this.state.value} onChange={this.handleChange.bind(this)} className="form-control" name="title"></textarea>
                            </form>

                            <button className='btn' style={{ backgroundColor: "rgb(55, 211, 180)", color: "white", width: "300px", marginTop: "30px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)}>
                                Invite to Interface
                        </button>


                        </div>
                    </div>
                </div>
            )
        // } else {
        //     return (
        //         <div className={contractStyles.container}>
        //             <div style={{ position: "absolute", zIndex: 1000, width: "337px", paddingTop: "8px" }}>
        //                 {this.muteButton()}
        //             </div>
        //             <div className={contractStyles.video} id="container">

        //             </div>
        //             <div style={{ position: "absolute", zIndex: 1000, bottom: "54px" }}>
        //                 <button className={contractStyles.end + ` btn`} type="button" onClick={this.onStopSubmit.bind(this)}>
        //                     End Interface
        //                 </button>

        //             </div>
        //         </div>
        //     )
        // }
    }
}
const mapStateToProps = function (props: any, state: any) {
    console.log(props)
    return {
        profile: props.login.profile,
        token: props.login.token,
        bearer: props.login.bearer,
        wallet: props.getWalletAmount.walletAmount,
        interface: props.startInterface.start
    }

}
export default connect(mapStateToProps)(Contract);
