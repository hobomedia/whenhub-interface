import * as React from 'react';
import { Link } from 'react-router-dom';

let tour3Styles = require('./Tour3.scss');


export default class Tour3 extends React.Component<any, {}>{ 
  constructor(props:any){
    super(props)
  }

  onSubmit() {
      this.props.history.push('/')

  }

    render() {
    return (
        <div className={tour3Styles.newContainer}>
          <div className={tour3Styles.tour}>
            <div className={tour3Styles.exit}>
                <Link to="/" style={{color: "#FFF"}}>X</Link>
            </div>
            <div>
                <img src={'../resources/tour3.png'} alt="tour1" />
            </div>
            <div className={tour3Styles.nextContainer}>
                <button style={{ backgroundColor: "#5f7dd3", color: "white", marginLeft: "22px", width: "293px", marginTop: "10px", borderRadius: "20px", fontWeight: 100 }} type="button" onClick={this.onSubmit.bind(this)} className="btn">
                    Start
                </button>
            </div>

          </div>
        </div>   
    );
  }
}
