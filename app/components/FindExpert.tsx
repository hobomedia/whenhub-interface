import * as React from 'react';
// import { Link } from 'react-router-dom';
import Nav from './Nav';

let styles = require('../components/Home.scss');
let FindExpertStyles = require('../components/FindExpert.scss');

export default class FindExpert extends React.Component<any>{ 
    constructor(props:any){
      super(props)
    }

    onSubmit(){
    }

    click() {
    }
  
      render() {
      return (
        <div>
          <Nav 
            button={"back"}
            page={"Find an Expert"}

          />
          <div className={styles.container}>
            <div id={FindExpertStyles.background}>
              {/* <Link onClick={this.click} to="/">back</Link> */}
                  <div id={FindExpertStyles.enrolled}>
                    <div style={{fontSize: "30pt", color: "white", marginLeft: "110px"}}>
                      10283
                    </div>
                    <div style={{color: "white", marginLeft: "124px", fontWeight: 100}}>
                      Experts Enrolled
                    </div>
                  </div>

              <div id={FindExpertStyles.enrolled}>
                <form className="form-horizontal">
                    <div style={{color: "white", marginLeft: "10px", fontWeight: 100}}>
                      Topic
                    </div>
                    <input style={{width: "320px", marginLeft: "10px"}} type="text" placeholder="All" className="form-control" name="title" />
                </form>
                <button style={{ backgroundColor: "#37d3b4", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px", fontWeight: 100}} type="button" onClick={this.onSubmit} className="btn">
                  View Experts
                </button>
              </div>



            </div>
          </div>
        </div>
      );
    }
  }
  