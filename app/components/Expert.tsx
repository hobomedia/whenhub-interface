import * as React from 'react';
// import Nav from './Nav';
// import { actionCreatorVoid } from '../../app/actions/helpers';
// / <reference path="'../../libraries/fm.icelink.d.ts" />

const styles = require('../components/Home.scss');
// const beExpertStyles = require('../components/BeExpert.scss')
const expertStyles = require('../components/Expert.scss')


// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, { connect: Boolean, localMedia: any, layoutManager: any, remoteMedia: any, client: any, num: number }>{
    constructor(props: any) {
        super(props)
        this.state = {
            connect: false,
            localMedia: null,
            layoutManager: null,
            remoteMedia: null,
            client: null,
            num: 0
        }
    }

    connection(error: any) {
        if (error) {
            return error.getException();

        } else {
            return undefined
        }
    }

    componentDidMount() {
        console.log("connect");
        // actionCreatorVoid("test").test({type: "test"})
        this.setState({ connect: true });

        const audio = true;
        const video = true;
        const that = this;

        // start local media
        const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);

        localMedia.start().then(function (lm: any) {
            console.log("media capture started");
            const container: HTMLElement = document.getElementById("container")!;
            const layoutManager = new fm.icelink.DomLayoutManager(container);

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
                    let joinArgs = new fm.icelink.websync4.JoinConferenceArgs("/auto-signalling/" + "262511090");
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
                        console.log("callback")

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

                        connection.addOnStateChange(function (c: fm.icelink.Connection) {
                            console.log("state change")
                            var error = connection.getError();
                            console.log(connection.getState())

                            if (c.getState() == fm.icelink.ConnectionState.Connected) {
                                that.state.layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());
                                console.log("add remote view after state change")
                            } else if (c.getState() == fm.icelink.ConnectionState.Failing || c.getState() == fm.icelink.ConnectionState.Closing) {
                                console.log("removed remote view because connection failed")
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
                    promise.reject(error);
                }
                // that.setState({ client: client })
                return promise;
            }).fail(function (error: any) {
                console.log(error.message)
            })
    }

    showBack() {
        if (this.props.experts.length > 0 && this.state.num > 0) {
            return <button className={expertStyles.back} onClick={this.back.bind(this)}>
                <i className="fa fa-chevron-circle-left"></i>
            </button>
        }
        return
    }

    showNext() {
        if (this.props.experts.length > 0 && this.props.experts.length >= this.state.num + 2) {
            return <button className={expertStyles.next} onClick={this.next.bind(this)}>
                <i className="fa fa-chevron-circle-right"></i>
            </button>
        }
        return
    }


    next() {
        this.setState({ num: this.state.num + 1 })
    }

    back() {
        this.setState({ num: this.state.num - 1 })

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

        // this.props.history.push('/RateCall')

        // this.state.layoutManager.removeRemoteView(this.state.remoteMedia.getId())


    }

    createId() {
        function S4() {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        }
        return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0, 3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();
    }


    render() {
        return (<div className={styles.container}>
            <div className={expertStyles.video} id="container">

                <button className={expertStyles.button + ` btn`} type="button" onClick={this.onStopSubmit.bind(this)}>
                    End Interface
                    </button>
            </div>
        </div>);
    }
}
