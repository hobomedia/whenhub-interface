import * as React from 'react';
import Nav from './Nav';

let styles = require('../components/Home.scss');
let expertStyles = require('../components/Expert.scss')

// interface ExpertState {rating: any, temp_rating: any}
export default class BeExpert extends React.Component<any, {}>{ 
    constructor(props:any){
      super(props)
    }

    onSubmit() {
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
                        <div style={{color: "#FFF", position: "absolute", left: "30%", fontWeight: 100}}>
                            Connect With Interace
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  