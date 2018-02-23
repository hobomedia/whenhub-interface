import * as React from 'react';
let styles = require('./Home.scss');


export default class GoOnline extends React.Component<any>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
    history.back();
  }

    render() {
        return (
        <div className={styles.container}>
            <div id={styles.bebackground}>
                <button style={{ backgroundColor: "#e64b4b", color: "white", marginLeft: "10px", width: "320px", marginTop: "10px", borderRadius: "20px"}} type="button" onClick={this.onSubmit} className="btn">
                    Go Offline
                </button>

                <div style={{color: "white", paddingLeft: "10px", paddingRight: "10px", paddingTop: "30px"}}>
                    You are currently Online and appearing in searches on the WhenHub Interface Network
                </div>
                <div style={{color: "white", paddingLeft: "10px", paddingTop: "10px"}}>
                    Topic
                </div>
                <div style={{color: "white", paddingLeft: "10px"}}>
                    Hourly Rate
                </div>
            </div>
        </div>       
        );
    }
}
