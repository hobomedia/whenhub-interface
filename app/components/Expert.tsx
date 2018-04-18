import * as React from 'react';
import Nav from './Nav';
// import { actionCreatorVoid } from '../../app/actions/helpers';
// / <reference path="'../../libraries/fm.icelink.d.ts" />

const styles = require('../components/Home.scss');
const expertStyles = require('../components/Expert.scss')
const beExpertStyles = require('../components/BeExpert.scss')


// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, {connect: Boolean, localMedia: any, layoutManager: any, remoteMedia: any, client: any, num: number}>{ 
    constructor(props:any){
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

    componentWillMount() {

    }

    onSubmit() {
        console.log("connect");
        // actionCreatorVoid("test").test({type: "test"})
        this.setState({connect: true}); 

        const audio = true;
        const video = true;
        const that = this; 

        // start local media
        const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);
        
        localMedia.start().then(function(lm: any) {
            console.log("media capture started");    

            
            that.setState({localMedia: localMedia})        
        })
        .then(function() {
            const container: HTMLElement = document.getElementById("container")!; 
            const layoutManager = new fm.icelink.DomLayoutManager(container);
            const remoteMedia = new fm.icelink.RemoteMedia();

            //set local media to layout manager
            layoutManager.setLocalView(localMedia.getView());
            
            //add remote media to layout manager
            remoteMedia.getViewSink().setViewScale(fm.icelink.LayoutScale.Contain);
            layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());
            
            //create connection to remote client
            const audioStream = new (window as any).fm.icelink.AudioStream(that.state.localMedia, remoteMedia);
            const videoStream = new(window as any).fm.icelink.VideoStream(that.state.localMedia, remoteMedia);
            const connection = new fm.icelink.Connection([audioStream, videoStream]);
            
            connection.setIceServers([
                new fm.icelink.IceServer("stun:turn.icelink.fm:3478"),
                new fm.icelink.IceServer("turn:turn.icelink.fm:443", "test", "pa55w0rd!")
            ]);

            connection.addOnStateChange((c: fm.icelink.Connection) => {
                let error = connection.getError();
                fm.icelink.Log.info('Connection state is ' + new fm.icelink.ConnectionStateWrapper(connection.getState()).toString() + '.', error.getException());
                console.log(new fm.icelink.ConnectionStateWrapper(connection.getState()).toString())
                if (connection.getState() === fm.icelink.ConnectionState.Connected) {
                    console.log("peer joined")
                }
                else if (connection.getState() === fm.icelink.ConnectionState.Closing ||
                    connection.getState() === fm.icelink.ConnectionState.Failing) {
                    // Remove the remote view from the layout.
					var lm = that.state.layoutManager;
                    if (lm != null) {
                        lm.removeRemoteView(remoteMedia.getId());
                    }

                    remoteMedia.destroy();
                }
                else if (connection.getState() === fm.icelink.ConnectionState.Closed) {
                    console.log("peer left");
                }
                else if (connection.getState() === fm.icelink.ConnectionState.Failed) {
                    console.log("peer failed");
                    //Attempt to reconnect
                }
            });
            
            //connect to websync
            const client = new (window as any).fm.websync.client("https://v4.websync.fm/websync.ashx");
            client.connect({
                onSuccess: function(e: any) {
                    console.log("connected to websync");
                },
                onFailure: function(e: any) {
                    console.log("failed to connect to websync");
                }
            });

            //Join conference
            let promise = new fm.icelink.Promise();
            try {
                let joinArgs = new fm.icelink.websync4.JoinConferenceArgs("/auto-signalling/" + "999089887");
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
                    const audioStream = new (window as any).fm.icelink.AudioStream(that.state.localMedia, remoteMedia);
                    const videoStream = new(window as any).fm.icelink.VideoStream(that.state.localMedia, remoteMedia);
                    const connection = new fm.icelink.Connection([audioStream, videoStream]);
                    
                    connection.setIceServers([
                        new fm.icelink.IceServer("stun:turn.icelink.fm:3478"),
                        new fm.icelink.IceServer("turn:turn.icelink.fm:443", "test", "pa55w0rd!")
                    ]);

                    connection.addOnStateChange(function(c) {
                        console.log("state change")
                        if (c.getState() == fm.icelink.ConnectionState.Connected) {
                            layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());
                        } else if (c.getState() == fm.icelink.ConnectionState.Failing || c.getState() == fm.icelink.ConnectionState.Closing) {
                            layoutManager.removeRemoteView(remoteMedia.getId());
                        }
                    });
        
                    return connection
                })
                
                fm.icelink.websync4.ClientExtensions.joinConference(client, joinArgs);
            }
            catch(error) {
                promise.reject(error);
            }

            that.setState({layoutManager: layoutManager, remoteMedia: remoteMedia, client: client})
        }).fail(function(error: any) {
            console.log(error.message)
        })
    }

    showBack() {
        if(this.props.experts.length > 0 && this.state.num > 0){
            return <button style={{display: "inline", float: "left", marginTop: "15px", border: "none", backgroundColor: "transparent"}} onClick={this.back.bind(this)}>
                <i className="fa fa-chevron-circle-left" style={{color: 'black'}}></i>
        </button>
        }
        return
    }
    
    showNext() {
        if(this.props.experts.length > 0 && this.props.experts.length >= this.state.num + 2){
            return <button style={{display: "inline", float: "right", marginTop: "15px", border: "none", backgroundColor: "transparent", marginLeft: "247px"}} onClick={this.next.bind(this)}>
                <i className="fa fa-chevron-circle-right" style={{color: 'black'}}></i>
        </button>
        }
        return 
    }


    next() {
        this.setState({num: this.state.num + 1})
    }

    back() {
        this.setState({num: this.state.num - 1})

    }
    onStopSubmit() {
        const that = this; 
        this.state.localMedia.stop().then(function(lm: any) {
            console.log("media capture stopped");
        })
        
        this.state.client.disconnect({
            onComplete: function(e: any) {
                console.log("disconnected");
                that.setState({connect: false})
            }
        });

        // this.state.layoutManager.removeRemoteView(this.state.remoteMedia.getId())


    }

    createId() {

        function S4() {  
            return (((1+Math.random())*0x10000)|0).toString(16).substring(1);  
         }  
         return (S4() + S4() + "-" + S4() + "-4" + S4().substr(0,3) + "-" + S4() + "-" + S4() + S4() + S4()).toLowerCase();

    }
  
      render() {
        if(this.state.connect == false){
            let stars = [];
            if(this.props.experts.length > 0){
                for (let i = 0; i < 5; i++) {
                    if (this.props.experts[this.state.num].expertise.selfRating > 0 ) {
                        if(i + 1 <= this.props.experts[this.state.num].expertise.selfRating){
                            let klass = `${beExpertStyles.star}` + ` ${beExpertStyles.selected}`;
                            `${styles.appTab} ${styles.active}`
                            stars.push(
                                <label
                                    key={i}
                                    className={klass}
                                >
                                    ★
                                </label>
                            );
                        }else if(i + 1> this.props.experts[this.state.num].expertise.selfRating){
                            let klass = `${expertStyles.star}`;
                            `${styles.appTab} ${styles.active}`
        
                            stars.push(
                                <label
                                    key={i}
                                    className={klass}
                                >
                                    ★
                                </label>
                            );
        
                        }

                    }else {
                        let klass = `${expertStyles.star}`;
                        `${styles.appTab} ${styles.active}`

                        stars.push(
                            <label
                                key={i}
                                className={klass}
                            >
                                ★
                            </label>
                        );

                    }
                }
            }


      return (
        <div>
          <Nav 
            button={"back"}
            page={"Interface"}
            back={"Find an Expert"}
            current={"Expert"}
            handler={this.props.handler}
            next={this.next.bind(this)}
            expertLength={this.props.experts.length}
            expertNum={this.state.num}
          />
          <div className={styles.container} style={{position: "relative"}}>
            <div id={styles.bebackground} style={{backgroundImage: 'url(' + this.props.experts[this.state.num].picture + ')', backgroundRepeat: 'no-repeat', backgroundSize: '337px 560px'}}>
                {/* <div id="container" style={{width: "100%", height: "50%"}}></div> */}
                {/* <div className={expertStyles.swipe}>
                    <img src={'../resources/swipe.png'} alt="swipe" />
                </div> */}
                    <div>
                        {this.showBack()}
                        {this.showNext()}
                    </div>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", bottom: "0", position: "absolute", paddingTop: "13px", width: '338px', height: "255px"}}>
                        <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200}}>
                            {this.props.experts[this.state.num].name}
                        </div>
                    <div style={{ marginTop: "10px"}}>
                        <div>
                            <div className={expertStyles.fields}>
                            Expertise
                            </div>
                        </div>

                        <div style={{marginBottom: "10px"}}>
                            <div className={expertStyles.fields}>
                            {this.props.experts[this.state.num].expertise.expertise}
                            </div>
                        </div>
                        <div>
                            <div className={expertStyles.fields}>
                            W{this.props.experts[this.state.num].expertise.hourlyRate +'.00 '}({'$' + this.props.experts[this.state.num].expertise.hourlyRate * .25 + '.00'}) per hour - Minimum {this.props.experts[this.state.num].expertise.minimumDuration} mins.
                            </div>
                        </div>
                        <div className={expertStyles.ratings}>
                            <div style={{fontWeight: 100, marginLeft: "10px", color: "#FFF"}}>
                            Self-rating for Topic

                            <div className="star-rating">
                                {stars}
                            </div>

                            </div>
                        </div>
                        <button style={{ backgroundColor: "#e64b4b", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                            Connect With Interface
                        </button>

                    </div>
              </div>
            </div>
          </div>
        </div>
      )}else {
          return (
             <div className={styles.container}>
                <div className={expertStyles.video} id="container">
                    <button style={{ backgroundColor: "#e64b4b", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onStopSubmit.bind(this)} className="btn">
                        End Interface
                    </button>

                </div>
             </div> 
          )
      }
    }
  }
  