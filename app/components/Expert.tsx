import * as React from 'react';
import Nav from './Nav';
// import { actionCreatorVoid } from '../../app/actions/helpers';
/// <reference path="'../../libraries/fm.icelink.d.ts" />

const styles = require('../components/Home.scss');
const expertStyles = require('../components/Expert.scss')

// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, {}>{ 
    constructor(props:any){
      super(props)
    }

    componentWillMount() {

    }

    onSubmit() {
        console.log("connect");
        // actionCreatorVoid("test").test({type: "test"})
        
        let audio = true;
        let video = true;
        
        let localMedia = new (window as any).fm.icelink.LocalMedia(audio, video);
        
        localMedia.start().then(function(lm: any) {
            console.log("media capture started");
            
        })
        .then(function() {
            const container: HTMLElement = document.getElementById("container")!; 
            console.log(container)
            let layoutManager = new fm.icelink.DomLayoutManager(container);

            layoutManager.setLocalView(localMedia.getView());
        })
    }
  
      render() {
        let stars = [];
        
        for(let i = 0; i < 5; i++) {
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

                        <button style={{ backgroundColor: "#e64b4b", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit} className="btn">
                            Connect With Interface
                        </button>

                    </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  