import * as React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';

let styles = require('../components/Home.scss');
// let FindExpertStyles = require('../components/FindExpert.scss');

export default class BeExpert extends React.Component<any>{ 
    constructor(props:any){
      super(props)
    }

    onSubmit() {
      this.props.history.push('/GoOnline')
    }
  
      render() {
      return (
        <div>
          <Nav 
            button={"back"}
          />
          <div className={styles.container}>
            <div id={styles.bebackground}>
              {/* <Link to="/">back</Link> */}
              <div style={{backgroundColor: "rgba(0, 0, 0, 0.5)", bottom: "32px", paddingBottom: "13px", paddingTop: "10px", position: "absolute", width: '338px', height: "35%"}}>
                <div style={{ color: "white", marginLeft: "10px" }}>
                  Name
                </div>
                  
                    <div style={{ marginTop: "10px" }}>
                      <form className="form-horizontal">
                        <div style={{ color: "white", marginLeft: "10px" }}>
                          Expertise Topic
                        </div>
                        <input style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="Topic" className="form-control" name="title" />
                      
                        <div style={{ color: "white", marginLeft: "10px" }}>
                          Hourly Rate($)
                        </div>
                        <input style={{ width: "320px", marginLeft: "10px" }} type="text" placeholder="00.00" className="form-control" name="title" />
                        
                        <div style={{ color: "white", marginLeft: "10px" }}>
                          Hourly Rate($)
                        </div>

                      
                      </form>
                      <button style={{ backgroundColor: "#37d3b4", color: "white", width: "320px", marginLeft: "10px", marginTop: "10px", borderRadius: "20px"}} type="button" onClick={this.onSubmit.bind(this)} className="btn">Go Online</button>
                    </div>


              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  