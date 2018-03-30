import * as React from 'react';
import Nav from './Nav';
// import { actionCreatorVoid } from '../../app/actions/helpers';
// / <reference path="'../../libraries/fm.icelink.d.ts" />

const styles = require('../components/Home.scss');
const expertStyles = require('../components/Expert.scss')

// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, {connect: Boolean, localMedia: any, layoutManager: any, remoteMedia: any}>{ 
    constructor(props:any){
      super(props)

      this.state = {
          connect: false,
          localMedia: null,
          layoutManager: null,
          remoteMedia: null
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


        const localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);
        
        localMedia.start().then(function(lm: any) {
            console.log("media capture started");    
            that.setState({localMedia: localMedia})        
        })
        .then(function() {
            const container: HTMLElement = document.getElementById("container")!; 
            const layoutManager = new fm.icelink.DomLayoutManager(container);
            const remoteMedia = new fm.icelink.RemoteMedia();
            layoutManager.setLocalView(localMedia.getView());


            layoutManager.addRemoteView(remoteMedia.getId(), remoteMedia.getView());


            const audioStream = new (window as any).fm.icelink.AudioStream(that.state.localMedia, remoteMedia);
            const videoStream = new(window as any).fm.icelink.VideoStream(that.state.localMedia, remoteMedia);
            const connection = new fm.icelink.Connection([audioStream, videoStream]);
            connection.setIceServers([
                new fm.icelink.IceServer("stun:stun.server.com:3478"),
                new fm.icelink.IceServer("turn:turn.server.com:3478", "username", "password")
            ]);
            // const client = new fm.websync.client("https://v4.websync.fm/websync.ashx");
            // client.connect({
            //     onSuccess: function(e: any) {
            //         console.log("connected to websync");
            //     },
            //     onFailure: function(e: any) {
            //         console.log("failed to connect to websync");
            //     }
            // });
            that.setState({layoutManager: layoutManager, remoteMedia: remoteMedia})
        })
    }

    onStopSubmit() {
        const that = this; 
        this.state.localMedia.stop().then(function(lm: any) {
            console.log("media capture stopped");
            that.setState({connect: false})
        })

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
        
          for (let i = 0; i < 5; i++) {
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


      return (
        <div>
          <Nav 
            button={"back"}
            page={"Interface"}
            back={"Find an Expert"}
          />
          <div className={styles.container}>
            <div id={styles.bebackground}>
                {/* <div id="container" style={{width: "100%", height: "50%"}}></div> */}
                <div className={expertStyles.swipe}>
                    <img src={'../resources/swipe.png'} alt="swipe" />
                </div>
                <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: "260px", paddingTop: "13px", position: "absolute", width: '338px', height: "302px"}}>
                    <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200}}>
                    Name
                    </div>
                    <div style={{ marginTop: "10px"}}>
                        <div style={{marginBottom: "10px"}}>
                            <div className={expertStyles.fields}>
                            Expertise
                            </div>
                            <div className={expertStyles.fields}>
                                Topic
                            </div>
                        </div>
                        <div>
                            <div className={expertStyles.fields}>
                            W00.00($00.00) - Minimum 0 mins.
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
                        <div className={expertStyles.ratings} style={{position: "absolute", right: "10px", color: "#FFD700"}}>
                            <div style={{color: "#FFF", fontWeight: 100, marginBottom: "7px"}}>
                                Interface Rating
                            </div>
                            <div style={{color: "#FFD700", fontWeight: 100}}>
                                Not Available
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
  