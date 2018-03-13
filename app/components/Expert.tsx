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
              <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", marginTop: "260px", paddingTop: "13px", position: "absolute", width: '338px', height: "302px"}}>
                <div style={{ color: "white", marginLeft: "10px", fontSize: "25px", fontWeight: 200}}>
                  Name
                </div>
                  
                    <div style={{ marginTop: "10px" }}>
                      <form className="form-horizontal">
                        <div style={{marginBottom: "10px"}}>
                          <div className={expertStyles.fields}>
                            Expertise Topic
                          </div>
                          <div className={expertStyles.fields}>
                              Topic
                          </div>
                        </div>
                        <div>
                          <div className={expertStyles.fields}>
                            Hourly Rate($)
                          </div>
                          <div className={expertStyles.fields}>
                              Rate
                          </div>
                        </div>
                        <div style={{marginTop: "10px"}}>
                          <div style={{fontWeight: 100, marginLeft: "10px", color: "white"}}>
                            Self-rating for Topic

                            <div className="star-rating">
                              {stars}
                            </div>

                          </div>
                        </div>
                      
                      </form>
                      <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginLeft: "10px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                        Connect With Interace
                      </button>
                    </div>


              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  