import * as React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

let styles = require('./Home.scss');
let referStyles = require('./Refer.scss');

export default class Refer extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
      console.log("refer")
  }

    render() {
    return (
      <div>
        <Nav 
          button={"back"}
          page={"Refer a Friend"}
        />
        <div className={styles.container}>
            <div className={referStyles.refer}>
                <div>
                    <img src={'../resources/referral.png'} alt="referral" />
                </div>
                <div className={referStyles.buttons}>
                    <div style={{marginBottom: "20pt"}}>
                        <button style={{ backgroundColor: "#37d3b4", color: "white", marginLeft: "10px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit} className="btn">
                            Share
                        </button>
                    </div>
                    <div>
                        <Link to="/">Cancel</Link>
                    </div>
                </div>
            </div>
        </div>   
      </div>    
    );
  }
}
