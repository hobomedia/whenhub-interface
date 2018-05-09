import * as React from 'react';
import { Link } from 'react-router-dom';

let tour2Styles = require('./Tour2.scss');


export default class Tour2 extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
      console.log("submit")
      this.props.history.push('/Tour3')
  }

    render() {
    return (
        <div className={tour2Styles.newContainer}>
          <div className={tour2Styles.tour}>
            <div className={tour2Styles.exit}>
                <Link to="/" style={{color: "#FFF"}}>X</Link>
            </div>
            <div>
                <img src={'../resources/tour2.png'} alt="tour1" />
            </div>
            <div className={tour2Styles.nextContainer}>
                <button style={{ backgroundColor: "#5f7dd3", color: "white", marginLeft: "22px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                    Next
                </button>
            </div>

          </div>
        </div>   
    );
  }
}
